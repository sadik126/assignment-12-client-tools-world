import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Useadmin from '../hooks/Useadmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = Useadmin(user)
    console.log(admin, user)
    return (
        <div className='h-screen'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h2 className='text-5xl text-orange-600 uppercase'>Welcome to dashboard</h2>
                    <Outlet></Outlet>

                    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">




                        <li><Link to="/dashboard">Myorders</Link></li>


                        {admin === false && <li><Link to="/dashboard/review">Add a review</Link></li>}




                        <li><Link to="/dashboard/profile"> My Profile</Link></li>





                        {
                            admin && <li><Link to="/dashboard/users"> Make admin</Link></li>
                        }

                        {
                            admin && <li><Link to="/dashboard/manageorders"> Manage all orders</Link></li>
                        }

                        {
                            admin && <li><Link to="/dashboard/manageproducts"> Manage all products</Link></li>
                        }

                        {
                            admin && <li><Link to="/dashboard/addproducts"> Add product</Link></li>
                        }



                    </ul>

                </div>
            </div>

        </div>

    );
};

export default Dashboard;