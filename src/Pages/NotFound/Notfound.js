import React from 'react';
import notFound from '../../images/404.jpg'

const Notfound = () => {
    return (
        <div className='bg-gray-800 '>
            <div className='bg-white w-2/3 mx-auto p-3 text-center'>
                <h2 className='text-lime-500 text-8xl'>404</h2>
                <h3 className='text-lime-500 text-3xl'>OPPS! PAGE NOT FOUND</h3>
                <p className='text-lime-500 text-2xl'>Sorry the page you're looking for dosen't exist.</p>
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default Notfound;