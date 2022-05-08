import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomHook from '../../Hooks/useCustomHook';
import Equipment from '../Equipment/Equipment';
import MyItems from '../MyItems/MyItems';

const Equipments = () => {
    const [equipments, setEquipments] = useCustomHook();

    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://murmuring-harbor-91585.herokuapp.com/equipment/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const restEquipment = equipments.filter(equipment => equipment._id !== id);
                    setEquipments(restEquipment);
                })
        }
    }


    return (
        <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]">
            <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>See the all essential hiking equipments</h2>
            <div className='md:grid grid-cols-3 gap-4 py-8'>
                {
                    equipments.map(equipment => <div key={equipment._id} className='bg-white border-solid border-2 border-gray-800 rounded p-2 font-playfair md:w-11/12 mx-auto' >
                        <img className='sm:object-cover mx-auto md:w-72 text-center pb-5' src={equipment.img} alt="" />
                        <h2 className='text-2xl pb-2'> <span className='font-bold'>Name:</span> {equipment.name}</h2>
                        <p className='text-2xl pb-2'> <span className='font-bold'>Price:$ </span>{equipment.price}</p>
                        <p className='text-2xl pb-2'> <span className='font-bold'>Supplier Name:</span> {equipment.supplier}</p>
                        <p className='text-2xl pb-2'> <span className='font-bold'>Quantity:</span> {equipment.quantity}</p>
                        <p> <span className='font-bold text-2xl pb-2'>Description:</span> <span className='font-sans'>{equipment.description}</span></p>
                        <div className='flex justify-center pt-3'>
                            <button onClick={() => handleDelete(equipment._id)} className='bg-lime-500 hover:bg-lime-600 px-16 py-2 w-full rounded-lg text-white text-2xl'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
            <MyItems></MyItems>
            <div className="text-center py-8">
                <button onClick={() => navigate('/additems')} className='bg-lime-500 hover:bg-lime-600 px-16 py-2 w-1/2 rounded-lg text-white text-2xl'>Add Items</button>
            </div>
        </div>
    );
};

export default Equipments;