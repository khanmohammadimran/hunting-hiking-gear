import React from 'react';
import useCustomHook from '../../../Hooks/useCustomHook';
import Equipment from '../../Equipment/Equipment';
import Banner from '../Banner/Banner';

const Home = () => {
    const [equipments] = useCustomHook();
    return (
        <div>
            <div className='bg-gray-800 text-white'>
                <h1 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani
'>Never Stop Exploring</h1>
                <h2 className='font-playfair text-center text-3xl'>Hiking Equipment In Outdoor Increation</h2>
                <Banner></Banner>
            </div>
            <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]">
                <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Explore Our Equipments</h2>
                <div className='grid grid-cols-3 md:w-11/12 mx-auto gap-x-4 gap-y-4 pb-5'>
                    {
                        equipments.slice(0, 6).map(equipment => <Equipment
                            key={equipment.id}
                            equipment={equipment}
                        ></Equipment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;