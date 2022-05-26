import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolsID } = useParams();
    return (
        <div>
            this is purchase
        </div>
    );
};

export default Purchase;