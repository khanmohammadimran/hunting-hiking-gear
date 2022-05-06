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
            <h2>This is my items{myitem.length}</h2>

        </div>
    );
};

export default MyItems;