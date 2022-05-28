import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Toolsdetails = () => {
    const { toolsID } = useParams();
    const [products, setProducts] = useState({})

    useEffect(() => {
        fetch(`https://calm-taiga-28787.herokuapp.com/tools/${toolsID}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={products.img} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">{products.name}</h1>
                    <p class="py-6">{products.description}</p>
                    <p class="py-6 text-red-600 text-2xl">Price:{products.price} BDT</p>
                    <p class="py-6 text-xl">Available products: {products.available}</p>
                    <p class="py-6 text-xl">Minimum products: {products.minimum}</p>
                    <button class="btn btn-primary">Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Toolsdetails;