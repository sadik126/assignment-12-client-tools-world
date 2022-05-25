import React from 'react';

const Bussiness = () => {
    return (
        <div className='flex justify-center mt-5'>
            <div class="stats stats-vertical lg:stats-horizontal shadow ">

                <div class="stat place-items-center">
                    <div class="stat-title">We served</div>
                    <div class="stat-value">100+</div>
                    <div class="stat-desc">Customers</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Annual revenew</div>
                    <div class="stat-value text-secondary">120+M</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Review</div>
                    <div class="stat-value">33K+</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Bussiness;