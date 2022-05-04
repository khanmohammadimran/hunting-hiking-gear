import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
            <div>
                <p><strong className="font-bold text-red-600">Something went wrong</strong></p>
            </div>
        );
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return (
            <p className='text-center'><ScaleLoader loading /></p>
        )
    }

    return (
        <div>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-lime-500"></div>
                <span className="flex-shrink mx-4 font-playfair text-2xl">Or</span>
                <div className="flex-grow border-t border-lime-500"></div>
            </div>
            <div className='w-full bg-lime-500 hover:bg-lime-600 flex justify-center align-middle gap-2 rounded-lg cursor-pointer'>
                <img src={google} className='bg-white rounded-full' alt="" />
                <button onClick={() => signInWithGoogle()} className='text-white py-2 text-3xl rounded-lg font-playfair'>Google Sign in</button>
            </div>
        </div>
    );
};

export default SocialLogin;