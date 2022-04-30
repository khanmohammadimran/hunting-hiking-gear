import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <div className='bg-gray-800 text-white'>
                <h1 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani
'>Never Stop Exploring</h1>
                <h2 className='font-playfair text-center text-3xl'>Hiking Equipment In Outdoor Increation</h2>
                <Banner></Banner>
            </div>
            <div>
                <h2 className='text-3xl'>Explore Our Equipments</h2>
            </div>
        </div>
    );
};

export default Home;