import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Myorders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
            console.log(user.email)
        }

    }, [user])

    const handledelete = (id) => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `http://localhost:4000/bookings/${id}`
            fetch(url, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                    console.log(data)
                })

        }

    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>product</th>
                        <th>phone</th>
                        <th>price</th>
                        <th>amount</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((o, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{o.name}</td>
                            <td>{o.email}</td>
                            <td>{o.product}</td>
                            <td>{o.phone}</td>
                            <td>{o.price} BDT</td>
                            <td>{o.amount}</td>
                            <td>{o.amount * o.price} BDT</td>
                            <td><button onClick={() => handledelete(o._id)} class="btn btn-xs btn-error">Delete</button></td>
                            <td>
                                {(o.price && !o.paid) && <button class="btn btn-xs btn-success"> <Link to={`/dashboard/payment/${o._id}`}>make payment</Link> </button>}

                                {(o.price && o.paid) && <span class=" btn-success"> paid</span>}

                            </td>
                        </tr>)
                    }




                </tbody>
            </table>
        </div>
    );
};

export default Myorders;