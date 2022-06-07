import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname /* || "/" */;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    let errorMessage;

    // if (error) {
    //     alert(error.message,)
    // } else {
    //     errorMessage = "";

    // }

    if (error) {
        errorMessage = <p className='text-red-500'>{error.message}</p>
    }

    if (loading) {
        return (
            <p className='text-center'><ScaleLoader loading /></p>
        )
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleSubmit = async event => {
        event.preventDefault();

        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://murmuring-harbor-91585.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    }


    const handleForgetPass = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('A reset password link has been sent to your device', {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }



    return (
        <div className="sm:object-cover bg-[url('/src/images/equipemnt-homepage-background.png')]">
            <div className='pb-8'>
                <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Please Login</h2>
                <form onSubmit={handleSubmit} className='md:w-1/2 sm:w-full mx-auto bg-white p-8 rounded-lg'>
                    <h2 className='text-center text-3xl pb-8 font-playfair'>Login to your account</h2>
                    <input onChange={(e) => setEmail(e.target.value)} className='block w-full border-2 p-4 rounded-lg font-playfair' type="email" name="email" placeholder='Enter Your Email' required />
                    <br />
                    <input onChange={(e) => setPassword(e.target.value)} className='block w-full border-2 p-4 rounded-lg font-playfair' type="password" placeholder='Enter Your Password' />
                    <br />
                    <input type="submit" className='block w-full border-2 p-4 rounded-lg bg-lime-500 hover:bg-lime-600 text-white text-2xl font-bold font-playfair cursor-pointer' value="login" />
                    {errorMessage}
                    <p onClick={handleForgetPass} className='text-2xl font-playfair pt-6 cursor-pointer text-blue-800'>Forget Password?</p>
                    <p className='text-2xl font-playfair pt-6'>New to Hiking Equipment? <Link to='/register' className='cursor-pointer text-blue-800' >Please Register</Link> </p>
                    <ToastContainer />
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;