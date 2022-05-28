import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ payment }) => {
    const stripe = useStripe()
    const element = useElements()

    const { _id, price, amount, name, email } = payment

    const total = price * amount;
    console.log(total)

    const [carderror, setCarderror] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setclientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transitionId, settransitionId] = useState('')
    console.log(clientSecret)


    useEffect(() => {
        fetch(`http://localhost:4000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setclientSecret(data.clientSecret);
                }
                console.log(data)
            })
    }, [total])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCarderror(error.message)
        } else {
            setCarderror('');
            setSuccess('')
            setProcessing(true)
        }


        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );

        if (intentError) {
            setCarderror(intentError?.message)
            setProcessing(false)

        }
        else {
            setCarderror('')
            settransitionId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess('your payment is completed')

            const payment = {
                product: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:4000/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                },
                body: JSON.stringify({ payment })
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                carderror && <p className='text-red-600'>{carderror}</p>
            }

            {
                success && <div className='text-green-600'>

                    <p> {success}</p>
                    <p> Your transitionId is : {transitionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;