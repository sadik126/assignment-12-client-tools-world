import React from 'react';
import { toast } from 'react-toastify';

const Selectadmin = ({ user, role, refetch }) => {
    const { email } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('successfully made an admin');
                    refetch()
                }

            })
    }
    return (

        <tr>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.role !== "admin" && <button onClick={makeAdmin} class="btn btn-xs">make admin</button>}</td>
            <td><button class="btn btn-xs btn-error">delete user</button></td>
        </tr>

    );
};

export default Selectadmin;