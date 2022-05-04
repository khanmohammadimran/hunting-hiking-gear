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
        <div>
            <h2>Name: {equipment.name}</h2>
        </div>
    );
};

export default EquipmentDetail;