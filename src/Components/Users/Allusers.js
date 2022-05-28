import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

import Selectadmin from './Selectadmin';




const Allusers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:4000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }





    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(user => <Selectadmin key={user._id} refetch={refetch} user={user}></Selectadmin>)
                    }




                </tbody>
            </table>
        </div>
    );
};

export default Allusers;