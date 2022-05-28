import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const Makepayment = () => {

    const stripePromise = loadStripe('pk_test_51L4KKASJGWFrRQt8wPF6JUjMkUIrrrRXjeMh0bk7GMs8HvjfPS5VwCFNg53uzPnR1B4QpWHCQJIp6X9i8PSD8HD100Y3GFFVFn');
    const { toolsID } = useParams();

    const url = `https://calm-taiga-28787.herokuapp.com/booking/${toolsID}`;

    const { data: payment, isLoading } = useQuery(['booking', toolsID], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>


            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-11">
                <div class="card-body">
                    <h2 className='text-accent-focus'>Hello , {payment.name}</h2>
                    <h2 class="card-title">Pay for {payment.product}</h2>
                    <p>Your product amount is <span className='text-red-600'>{payment.amount}</span> </p>
                    <p>please , pay  <span className='text-orange-600  font-bold text-3xl'>{payment.price * payment.amount} BDT</span> </p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Makepayment;