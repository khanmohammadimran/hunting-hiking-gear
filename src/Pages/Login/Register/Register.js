import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password)
    }

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login')
    }
    return (
        <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]">
            <div>
                <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Welcome! Please Signup</h2>
                <form onSubmit={handleSubmit} className='w-1/2 mx-auto bg-white p-8 rounded-lg'>
                    <h2 className='text-center text-3xl pb-8 font-playfair'>Create An Account</h2>
                    <input className='block w-full border-2 p-4 rounded-lg font-playfair' type="email" name="email" placeholder='Enter Your Email' required />
                    <br />
                    <input className='block w-full border-2 p-4 rounded-lg font-playfair' type="password" name="password" placeholder='Enter Your Password' />
                    <br />
                    <input className='block w-full border-2 p-4 rounded-lg font-playfair' type="password" name="confirmPassword" placeholder='Confirm Password' />
                    <br />
                    <input className='block w-full border-2 p-4 rounded-lg bg-lime-500 text-white text-2xl font-bold font-playfair cursor-pointer' type="submit" value="Register" />
                    <p className='text-2xl font-playfair pt-6'>Already have an account?? <span onClick={navigateLogin} className='cursor-pointer text-blue-800'>Please Login</span></p>
                </form>
            </div>

        </div>
    );
};

export default Register;