import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../../../CustomLink/CustomLink';

const Navbar = () => {
    const [click, setClick] = useState(false);
    return (
        <nav className='bg-gray-800 text-white pb-8'>
            <div onClick={() => setClick(!click)} className='w-5 h-5 md:hidden'>
                {click ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`bg-gray-800 text-white font-playfair text-2xl md:flex justify-center gap-x-8 absolute md:static duration-500 ${click ? 'top10' : 'top-[-225px]'}`}>
                <li><CustomLink to="/home">Home</CustomLink></li>
                <li><CustomLink to='/equipments'>Equipments</CustomLink></li>
                <li><CustomLink to="/blog">Blog</CustomLink></li>
                <li><CustomLink to='/manageitems'>Manage items</CustomLink></li>
                <li><CustomLink to='/additems'>Add items</CustomLink></li>
                <li><CustomLink to='/myitems'>My items</CustomLink></li>
                <li><CustomLink to='/login'>Login</CustomLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;