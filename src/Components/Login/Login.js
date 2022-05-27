import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import google from '../img/google.png'
import Loading from '../Loading/Loading';
import useToken from '../hooks/useToken';

const Login = () => {
    let location = useLocation();

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();
    const [
        signInWithEmailAndPassword, user, loading, error

    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || guser)


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (user || guser) {
        navigate(from, { replace: true });
    }

    if (loading || gloading) {
        return <Loading></Loading>
    }

    let errormessage;

    if (error || gerror) {
        errormessage = <p className='text-red-600'>{error?.message || gerror?.message}</p>
    }

    const onSubmit = async data => {

        await signInWithEmailAndPassword(data.email, data.password)
        console.log(user)
        navigate('/');
    };
    return (
        <div className='flex justify-center items-center h-screen'>

            <div className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h2 className="text-center text-2xl font-extrabold text-white">Please Login here</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">

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








                        <input className="btn btn-outline btn-primary w-full max-w-xs mt-6" type="submit" value="login" />
                    </form>

                    {errormessage}
                    <p>New to TOOLS WORLD?<Link to="/signup" className='text-green-600' > Create new account</Link></p>
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-success"> <img style={{ width: '30px' }} src={google} alt="" />Continue with google</button>

                </div>
            </div>

        </div>
    );
};

export default Login;