import React from 'react';

const Display = () => {
    return (
        <div className='flex justify-between'>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwcGN8ZW58MHx8MHx8&w=1000?w=500&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Gaming pc</h2>
                    <p>Choose your best product</p>

                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://assets-prd.ignimgs.com/2022/04/20/alienwarelaptop-1650471128761.jpg?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Gaming laptop</h2>
                    <p>we will give best products</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Display;