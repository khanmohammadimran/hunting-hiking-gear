import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EquipmentDetail = () => {
    const { equipmentId } = useParams();
    const [equipment, setEquipment] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/equipment/${equipmentId}`
        console.log(url)

        fetch(url)
            .then(res => res.json())
            .then(data => setEquipment(data))
    }, [])


    return (
        <div className="bg-[url('/src/images/equipemnt-homepage-background.png')] py-8">
            <div className='bg-white w-1/2 mx-auto rounded-lg drop-shadow-2xl p-2'>
                <h2 className='text-center font-rajdhani text-3xl py-5'>See The Detail of the Equipment</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center bg-white'>
                    <div>
                        <img className='sm:object-cover mx-auto md:w-96 text-center p-3 rounded-lg' src={equipment.img} alt="" />
                    </div>
                    <div className='font-sans'>
                        <h2 className='pb-1 text-2xl'>Name: {equipment.name}</h2>
                        <hr />
                        <p className='pb-1 text-2xl'>Price: ${equipment.price}</p>
                        <hr />
                        <p className='pb-1 text-2xl'>Quantity: {equipment.quantity}</p>
                        <hr />
                        <p className='pb-1 text-2xl'>Supplier: {equipment.supplier}</p>
                        <hr />
                        <p className='pb-1 text-2xl'>Description:</p><span>{equipment.description}</span>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='bg-lime-500 w-1/2 text-2xl font-bold text-white py-2 rounded-lg'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetail;