import { async } from '@firebase/util';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { toolsID } = useParams();
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState(null)

    // const getamount = e => {
    //     setAmount(e.target.value)
    // }
    // console.log(products)


    useEffect(() => {
        if (products) {
            fetch(`http://localhost:4000/tools/${toolsID}`)
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [products])
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const handleAmount = e => {
    //     e.preventDefault();
    //     const amount = e.target.amount.value;
    //     console.log(amount)
    // }
    const onSubmit = async data => {

        console.log(data)
        // setAmount(data)
        // console.log(data.amount)
        // const totalamount = data.amount;
        await fetch('http://localhost:4000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`your booking is done`)
                    reset();
                }
                else {
                    toast.error(`product added already`)
                }


            })




    };

    // console.log(products.available);
    return (
        <div className='flex justify-center items-center h-screen'>

            <div className="card w-96 bg-base-100 shadow-xl">



                <div className="card-body items-center text-center">
                    <h2 className="text-center text-2xl font-extrabold text-white">Please fill this</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input {...register("name")} value={user.displayName} type="text" placeholder="Type your name" className="input input-bordered w-full max-w-xs" />
                            {/* <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}


                            </label> */}




                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input {...register("email")} type="email" value={user.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product name</span>

                            </label>
                            <input {...register("product", { required: { value: true, message: 'product is required' } })} value={products.name} type="text" placeholder="your password" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <label className="label">
                            {errors.product?.type === 'required' && <span className="label-text-alt text-red-600">{errors.product.message}</span>}


                        </label>


                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your phone</span>
                            </label>
                            <label class="input-group">
                                <span>+88</span>
                                <input {...register("phone", {
                                    required: { value: true, message: 'number is required' },
                                    pattern: { value: /^[0-9+-]+$/, message: 'enter valid phone number' },
                                    minLength: { value: 11, message: 'your digit is lower than 11' },
                                    maxLength: { value: 11, message: "your digit is higher than 11" }

                                })} type="text" placeholder="enter your number" class="input input-bordered" />
                            </label>

                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                                {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                                {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                                {errors.phone?.type === 'maxLength' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}


                            </label>
                        </div>


                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Product price</span>
                            </label>
                            <label class="input-group">
                                <span>Price</span>
                                <input {...register("price", { required: { value: true, message: 'price is required' } })} value={products.price} type="text" placeholder="10" class="input input-bordered" />
                                <span>BDT</span>
                            </label>
                        </div>

                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-600">{errors.price.message}</span>}




                        </label>


                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Product amount</span>
                            </label>
                            <label class="input-group">
                                <span>Amount</span>
                                <input {...register("amount", {
                                    required: { value: true, message: 'number is required' },
                                    min: { value: products.minimum, message: 'icrease your number' },
                                    max: { value: products.available, message: 'reduce your number' }
                                })} type="number" placeholder="enter your amount" class="input input-bordered" />





                            </label>

                            <label className="label">
                                {errors.amount?.type === 'required' && <span className="label-text-alt text-red-600">{errors.amount.message}</span>}
                                {errors.amount?.type === 'min' && <span className="label-text-alt text-red-600">{errors.amount.message}</span>}
                                {errors.amount?.type === 'max' && <span className="label-text-alt text-red-600">{errors.amount.message}</span>}



                            </label>

                        </div>











                        <input disabled={errors.amount?.type === 'min' || errors.amount?.type === 'max'} className="btn btn-outline btn-primary w-full max-w-xs mt-6" type="submit" value="purchase" />
                    </form>









                </div>
            </div>

        </div>
    );
};

export default Purchase;