import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p><strong class="font-bold text-red-700">Please enter a correct email and password</strong></p>
            </div>
        );
    }
    if (loading) {
        return (
            <p className='text-center'><ScaleLoader loading /></p>
        )
    }


    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)
    }


    // const navigateRegister = event => {
    //     navigate('/register')
    // }
    return (
        <div className="sm:object-cover bg-[url('/src/images/equipemnt-homepage-background.png')]">
            <div className='pb-8'>
                <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Please Login</h2>
                <form onSubmit={handleSubmit} className='w-1/2 mx-auto bg-white p-8 rounded-lg'>
                    <h2 className='text-center text-3xl pb-8 font-playfair'>Login to your account</h2>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full border-2 p-4 rounded-lg font-playfair' type="email" name="email" placeholder='Enter Your Email' required />
                    <br />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full border-2 p-4 rounded-lg font-playfair' type="password" placeholder='Enter Your Password' />
                    <br />
                    <input type="submit" className='block w-full border-2 p-4 rounded-lg bg-lime-500 hover:bg-lime-600 text-white text-2xl font-bold font-playfair cursor-pointer' value="login" />
                    <p className='text-2xl font-playfair pt-6'>New to Hiking Equipment? <Link to='/register' className='cursor-pointer text-blue-800' >Please Register</Link> </p>

                </form>
            </div>
        </div>
    );
};

export default Login;