import React from 'react';

const Equipment = (props) => {
    console.log(props.equipment)
    const { name, img, price, supplier, description, quantity } = props.equipment;
    return (
        <div className='bg-white border-solid border-2 border-gray-800 rounded p-2 font-playfair md:w-11/12 mx-auto'>
            <img className='sm:object-cover mx-auto md:w-72 text-center pb-5' src={img} alt="" />
            <h2 className='text-2xl pb-2'> <span className='font-bold'>Name:</span> {name}</h2>
            <p className='text-2xl pb-2'> <span className='font-bold'>Price:$ </span>{price}</p>
            <p className='text-2xl pb-2'> <span className='font-bold'>Supplier Name:</span> {supplier}</p>
            <p className='text-2xl pb-2'> <span className='font-bold'>Quantity:</span> {quantity}</p>
            <p> <span className='font-bold text-2xl pb-2'>Description:</span> <span className='font-sans'>{description}</span></p>
            <div className='flex justify-center pt-3'>
                <button className='bg-lime-500 px-16 py-2 w-100 rounded-full text-white text-2xl'>Update</button>
            </div>
        </div>
    );
};

export default Equipment;