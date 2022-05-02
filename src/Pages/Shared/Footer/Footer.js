import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='lg:flex justify-around items-center text-center py-8 bg-gray-800'>
                <h2 className='font-Fredericka text-lime-500 text-3xl pb-5'>Hunting Hiking Gear</h2>
                <p className='text-2xl font-playfair text-white'>Copyright&copy;{new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer;