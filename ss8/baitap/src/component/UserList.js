import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {deleteById, getAllUser} from "../redux/action/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


export function UserList() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const getUsers = () => {
        dispatch(getAllUser())
    }
    const deleteId = (id) => {
        dispatch(deleteById(id))
        getUsers()
    }

    function deleteUser(id) {
        Swal.fire({
            title: 'Xác nhận xóa',
            text: 'Bạn có chắc chắn muốn xóa dữ liệu này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then(async (result) => {
            if (result.isConfirmed) {
                deleteId(id)
                await Swal.fire('Đã xóa!', 'Dữ liệu đã được xóa thành công.', 'success');
                getUsers();
            }
        });
    }


    return (
        <>
            <h1>UserList</h1>
            <button className="btn btn-outline-dark" onClick={() => getUsers()}>Get users</button>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>
                                <button style={{marginLeft: "10px"}} type="button"
                                        onClick={() => deleteUser(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>

        </>
    )
}