import React from 'react';
import { useParams } from 'react-router-dom';

const EquipmentDetail = () => {
    const { equipmentId } = useParams();
    return (
        <div>
            <h2>Welcome to Equipment Detail{equipmentId}</h2>
        </div>
    );
};

export default EquipmentDetail;