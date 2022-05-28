import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    return (

        <div className='flex '>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="card-title">Name:{user.displayName}</h2>
                    <h2 class="card-title">Email:{user.email}</h2>

                </div>
            </div>

        </div>

    );
};

export default Profile;