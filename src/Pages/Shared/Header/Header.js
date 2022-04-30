import React from 'react';
import Navbar from '../../Homepage/Navbar/Navbar';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div className='bg-gray-800 drop-shadow-2xl'>
            <img src={logo} alt="" className='mx-auto pt-2' />
            <h2 className='text-center font-Fredericka text-lime-500 text-3xl pb-5'>Hunting Hiking Gear</h2>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;