// import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';





const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myitem, setMyitem] = useState([]);



    useEffect(() => {
        const getMyItem = async () => {
            const email = user.email
            const url = `http://localhost:5000/myitem?email=${email}`
            const { data } = await axios.get(url);
            setMyitem(data);
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