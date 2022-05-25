import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    let nevigate = useNavigate();



    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    if (user) {
        console.log(user)
    }
    let errormessage;

    if (error || updateerror) {
        errormessage = <p className='text-red-600'>{error?.message || updateerror?.message}</p>
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password, data.name)
        await updateProfile({ displayName: data.name });

    };

    return (
        <div className='flex justify-center items-center h-screen'>

            <div className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h2 className="text-center text-2xl font-extrabold text-white">Please Register here</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input {...register("name", {
                                required: { value: true, message: 'name is required' }

                            })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}



                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input {...register("email", {
                                required: { value: true, message: 'email is required' },
                                pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'insert a valid email' }
                            })} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}


                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input {...register("password", {
                                required: { value: true, message: 'password is required' },
                                minLength: { value: 6, message: 'must be 6 charecter of password' }
                            })} type="password" placeholder="your password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}


                            </label>
                        </div>








                        <input className="btn btn-outline btn-glass bg-gradient-to-r from-red-700 to-yellow-500 w-full max-w-xs mt-6" type="submit" value="Sign up" />
                    </form>

                    {errormessage}
                    <p>Already have an account?<Link to="/login" className='text-primary' > Login here</Link></p>




                </div>
            </div>

        </div>
    );
};

export default Signup;