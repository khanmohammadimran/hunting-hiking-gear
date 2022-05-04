import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password)
    }

    if (error) {
        return (
            <div>
                <p><strong class="font-bold text-red-700">Something went Wrong!</strong></p>
            </div>
        );
    }
    if (loading) {
        return <ScaleLoader loading />
    }


    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]">
            <div className='pb-8'>
                <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Welcome to Hiking Equipment! Please Signup</h2>
                <form onSubmit={handleSubmit} className='w-1/2 mx-auto bg-white p-8 rounded-lg'>
                    <h2 className='text-center text-3xl pb-8 font-playfair'>Create An Account</h2>
                    <input className='block w-full border-2 p-4 rounded-lg font-playfair' type="email" name="email" placeholder='Enter Your Email' required />
                    <br />
                    <input className='block w-full border-2 p-4 rounded-lg font-playfair' type="password" name="password" placeholder='Enter Your Password' />
                    <br />
                    <input className='block w-full border-2 p-4 rounded-lg font-playfair' type="password" name="confirmPassword" placeholder='Confirm Password' />
                    <br />
                    <input className='block w-full border-2 p-4 rounded-lg bg-lime-500 hover:bg-lime-600 text-white text-2xl font-bold font-playfair cursor-pointer' type="submit" value="Register" />
                    <p className='text-2xl font-playfair pt-6'>Already have an account? <Link to='/login' className='cursor-pointer text-blue-800' >Please Login</Link> </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>

        </div>
    );
};

export default Register;