import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myorders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/bookings?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user])
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
                        </tr>)
                    }




                </tbody>
            </table>
        </div>
    );
};

export default Myorders;