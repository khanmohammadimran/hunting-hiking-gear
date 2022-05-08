import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';





const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myitem, setMyitem] = useState([]);
    const navigate = useNavigate();


    const itemDelete = id => {
        const proceed = window.confirm('Are you Sure');
        if (proceed) {
            const url = `https://murmuring-harbor-91585.herokuapp.com/myitem/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = myitem.filter(item => item._id !== id)
                    setMyitem(remaining)
                })
        }
    }


    useEffect(() => {
        const getMyItem = async () => {
            const email = user.email
            const url = `https://murmuring-harbor-91585.herokuapp.com/myitem?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyitem(data.myitems);
                console.log(data)
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMyItem();

    }, [user])


    return (
        <div className='md:grid grid-cols-3 gap-4 py-4'>
            {
                myitem.map(item => <div key={myitem._id} className='bg-white border-solid border-2 border-gray-800 rounded p-2 font-playfair md:w-11/12 mx-auto' >
                    <img className='sm:object-cover mx-auto md:w-72 text-center pb-5' src={item.img} alt="" />
                    <h2 className='text-2xl pb-2'> <span className='font-bold'>Name:</span> {item.name}</h2>
                    <p className='text-2xl pb-2'> <span className='font-bold'>Price:$ </span>{item.price}</p>
                    <p className='text-2xl pb-2'> <span className='font-bold'>Supplier Name:</span> {item.supplier}</p>
                    <p className='text-2xl pb-2'> <span className='font-bold'>Quantity:</span> {item.quantity}</p>
                    <p> <span className='font-bold text-2xl pb-2'>Description:</span> <span className='font-sans'>{item.description}</span></p>
                    <div className='flex justify-center pt-3'>
                        <button onClick={() => itemDelete(item._id)} className='bg-lime-500 hover:bg-lime-600 px-16 py-2 w-full rounded-lg text-white text-2xl'>Delete</button>
                    </div>
                </div>)
            }
            { }
        </div>
    );
};

export default MyItems;
