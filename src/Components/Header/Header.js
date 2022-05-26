import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const Handlesignout = () => {
        signOut(auth)
    }
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/tools">Tools</Link></li>

                            <li><Link to="/purchase">Purchase</Link></li>
                            <li><Link to="/review">Review</Link></li>

                            {
                                user ? <li><Link onClick={Handlesignout} to="/logout">Logout</Link></li> : <li><Link to="/login">Login</Link></li>
                            }

                            {
                                user ? <li><Link className='font-extrabold text-red-700' to="/">{user.displayName}</Link></li> : <li><Link to="/"></Link></li>
                            }

                            {
                                user ?
                                    <div class="avatar placeholder">
                                        <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                            <img src={user.photoURL} width="50px" alt="" />
                                        </div>
                                    </div> : <li><Link to="/"></Link></li>
                            }

                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-3xl font-bold text-red-700 font-serif">Tools world</a>
                </div>
                <div class="navbar-center hidden lg:flex navbar-end">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tools">Tools</Link></li>

                        <li><Link to="/purchase">Purchase</Link></li>
                        <li><Link to="/review">Review</Link></li>
                        {
                            user ? <li><Link onClick={Handlesignout} className="mr-16" to="/logout">Logout</Link></li> : <li><Link to="/login">Login</Link></li>
                        }

                        {
                            user ? <li><Link className='font-extrabold text-red-700' to="/">{user.displayName}</Link></li> : <li><Link to="/"></Link></li>
                        }

                        {
                            user ?
                                <div class="avatar placeholder">
                                    <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                        <img src={user.photoURL} width="50px" alt="" />
                                    </div>
                                </div> : <li><Link to="/"></Link></li>
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;