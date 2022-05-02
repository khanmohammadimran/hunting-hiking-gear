import React from 'react';
import useCustomHook from '../../Hooks/useCustomHook';
import Equipment from '../Equipment/Equipment';

const Equipments = () => {
    const [equipments] = useCustomHook();
    return (
        <div className='bg-white'>
            <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>See the all essential hiking equipments</h2>
            <div className='md:grid grid-cols-3 gap-4 py-8'>
                {
                    equipments.map(equipment => <Equipment
                        key={equipment.id}
                        equipment={equipment}></Equipment>)
                }
            </div>
        </div>
    );
};

export default Equipments;