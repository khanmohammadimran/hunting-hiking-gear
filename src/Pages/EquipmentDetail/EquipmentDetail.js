import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EquipmentDetail = () => {
    const { equipmentId } = useParams();
    const [equipment, setEquipment] = useState({});
    let { quantity } = equipment;



    useEffect(() => {
        const url = `http://localhost:5000/equipment/${equipmentId}`
        console.log(url)

        fetch(url)
            .then(res => res.json())
            .then(data => setEquipment(data))
    }, [])

    const updateQuantity = () => {
        quantity = parseInt(quantity) - 1;

        const url = `http://localhost:5000/equipment/${equipmentId}`
        console.log(url)
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                quantity: quantity
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => setEquipment(data))
            });

    }


    const handleSubmit = event => {
        event.preventDefault();
        let number = event.target.number.value;
        number = parseInt(number)
        quantity = parseInt(quantity) + number;
        console.log(quantity)
        const url = `http://localhost:5000/equipment/${equipmentId}`
        console.log(url)
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                quantity: quantity
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => setEquipment(data))
            });
    }


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
                <div className='text-center pb-4'>
                    <button onClick={updateQuantity} className='bg-lime-500 rounded-lg w-1/2 py-2 text-white text-2xl'>Delivered</button>

                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-lime-500"></div>
                        <span className="flex-shrink mx-4 font-playfair text-2xl">Or you can restock item</span>
                        <div className="flex-grow border-t border-lime-500"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="number" name="number" placeholder='Restock item Quantity' className=' border w-1/2 py-4 p-2 rounded-lg mb-2 font-sans' />
                        <br />
                        <input type="submit" value="Restock" className='bg-lime-500 rounded-lg w-1/2 py-2 text-white text-2xl' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetail;