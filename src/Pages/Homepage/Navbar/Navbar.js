import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [click, setClick] = useState(false);
    return (
        <nav className='bg-gray-800 text-white pb-8'>
            <div onClick={() => setClick(!click)} className='w-5 h-5 md:hidden'>
                {click ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`bg-gray-800 text-white font-playfair text-2xl md:flex justify-center gap-x-8 absolute md:static duration-500 ${click ? 'top10' : 'top-[-225px]'}`}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to='/equipments'>Equipments</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to='/manageitems'>Manage items</Link></li>
                <li><Link to='/additems'>Add items</Link></li>
                <li><Link to='/myitems'>My items</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;