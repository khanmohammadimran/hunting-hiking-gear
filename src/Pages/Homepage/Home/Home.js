import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomHook from '../../../Hooks/useCustomHook';
import Equipment from '../../Equipment/Equipment';
import GetYourFirstOrder from '../../GetYourFirstOrder/GetYourFirstOrder';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';

const Home = () => {
    const [equipments] = useCustomHook();
    const navigate = useNavigate();
    return (
        <div>
            <div className='bg-gray-800 text-white'>
                <h1 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Never Stop Exploring</h1>
                <h2 className='font-playfair text-center text-3xl'>Hiking Equipment In Outdoor Increation</h2>
                <Banner></Banner>
            </div>
            <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]">
                <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Explore Our Equipments</h2>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 md:w-11/12 mx-auto gap-x-4 gap-y-4 pb-5'>
                    {
                        equipments.slice(0, 6).map(equipment => <Equipment
                            key={equipment._id}
                            equipment={equipment}
                        ></Equipment>)
                    }
                </div>
            </div>
            <div className="bg-[url('/src/images/equipemnt-homepage-background.png')] text-center">
                <button onClick={() => navigate('/equipments')} className='bg-lime-500 hover:bg-lime-600 px-16 py-2 w-1/2 rounded-lg text-white text-2xl'>Manage Inventories</button>
            </div>
            <GetYourFirstOrder></GetYourFirstOrder>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;