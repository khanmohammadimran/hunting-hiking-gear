// import React, { useEffect, useState } from 'react';
// import { useForm } from "react-hook-form";
// import { useParams } from 'react-router-dom';

// const DeliveredItem = (event) => {
//     const { register, handleSubmit } = useForm();
//     const onSubmit = data => console.log(data);


//     const { equipmentId } = useParams();

//     event.preventDefault();
//     const equipment = event.target.quantity.value;
//     const newQuantity = parseInt(equipment.quantity) - 1;




//     // send data to the server
//     const url = `http://localhost:5000/equipment/${equipmentId}`
//     fetch(url, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(newQuantity)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log('success', data);
//             alert('users added successfully!!!');
//             event.target.reset();
//         })


//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <br />
//                 <input type="number" placeholder='Add Quantity' className='p-2 border-2 border-gray-300 w-1/2 rounded-lg py-4' {...register("number")} />
//                 <br />
//                 <input type="submit" value="Delivered" className='mt-2 bg-lime-500 text-2xl w-1/2 font-bold text-white py-2 rounded-lg' />
//             </form>
//         </div>
//     );
// };

// export default DeliveredItem;