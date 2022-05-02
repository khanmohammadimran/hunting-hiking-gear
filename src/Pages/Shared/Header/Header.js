import React from 'react';
import Navbar from '../../Homepage/Navbar/Navbar';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-gray-800 drop-shadow-2xl'>
            <Link to="/"> <img src={logo} className='mx-auto pt-2' alt='Logo' /> </Link>
            <h2 className='text-center font-Fredericka text-lime-500 text-3xl pb-5'>Hunting Hiking Gear</h2>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;