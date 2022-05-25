import React from 'react';

const Tool = (props) => {
    const { name, price, minimum, available, description, img } = props.tool
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} height="170px" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>

                <p>{description}</p>
                <p>Available : {available}</p>
                <p>Price : {price}</p>
                <p>Minimum : {minimum}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;