import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]">
            <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Please Login</h2>
            <form>
                <input type="email" name="email" placeholder='Enter Your Email' required />
                <br />
                <input type="password" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="login" />
            </form>
            <p>New to Hiking Equipment? <span onClick={navigateRegister} className='cursor-pointer text-blue-800'>Please Register</span></p>
        </div>
    );
};

export default Login;