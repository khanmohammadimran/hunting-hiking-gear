// import { async } from '@firebase/util';
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
            const url = `http://localhost:5000/myitem/${id}`
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
            const url = `http://localhost:5000/myitem?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyitem(data);
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
        <div>
            {
                // myitem.map(item => <div key={myitem._id}>
                //     <h2>Name: {item.name}</h2>
                //     <button onClick={() => itemDelete(item._id)}>Delete</button>
                // </div>)
                myitem.map(item => <div key={myitem._id}>
                    <img src={item.img} alt="" />
                    <h2>Name: {item.name}</h2>
                    <button onClick={() => itemDelete(item._id)}>Delete</button>
                </div>)
            }
            { }
        </div>
    );
};

export default MyItems;
