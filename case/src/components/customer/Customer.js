import './customer.css'
import Layout from "../views/Layout";
import React, {useEffect, useState} from "react";
import axios from "axios";
import sweat from "sweetalert2"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function Customer() {
    const [customers,setCustomer] = useState([])
    const  fetchApi = async () => {
        try {
            const result = await  axios.get('http://localhost:8080/customer')
            setCustomer(result.data)

        }catch (e) {
            console.log(e)
        }
    }
    useEffect(()=> {

        fetchApi()
    },[])

    const deleteById = async (id)=>{
        try{
            await  axios.delete("http://localhost:8080/customer/"+id)
            sweat.fire({
                icon:"success",
                title :"SUCCESSFULL",
                timer :"2000"
            })
        }catch (e) {
            console.log(e)
        }
        fetchApi()
    }
    function deleteCustomer(id,name) {
        sweat.fire({
            icon:"warning",
            title :`Do You Want To Delete ${name} ?`,
            showCancelButton: true,
            confirmButtonText:"OK"
        }).then(async (isDelete) =>{
            if(isDelete.isConfirmed){
            deleteById(id)
            }
        })
    }
    return(
        <Layout>
        <>
            <div style={{textAlign:" center"}}>
                <h1>Customer List</h1>

            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>STT</th>
                    <th> Name</th>
                    <th>Type Customer</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Identity Card</th>
                    <th>Phone </th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Function</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.type}</td>
                            <td>{customer.dayOfBirth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.identityCard}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button className="btn btn-success" style={{backgroundColor: "#149570"}}>Edit</button>
                                <button className="btn btn-success" type="button" style={{backgroundColor:"#ff0039"}}
                                     onClick={()=>deleteCustomer(customer.id,customer.name)} >Delete
                                </button>
                            </td>

                        </tr>

                    ))
                }
                </tbody>
            </table>

            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="pagination-container row container d-flex justify-content-center">
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">

                                    <nav>
                                        <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                                            <li className="page-item"><a className="page-link" href="#" data-abc="true"><i
    className="fa fa-angle-left"/></a></li>
                                            <li className="page-item active"><a className="page-link" href="#"
                                                                                data-abc="true">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#"
                                                                         data-abc="true">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#"
                                                                         data-abc="true">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#"
                                                                         data-abc="true">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#" data-abc="true"><i
    className="fa fa-angle-right"/></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
    aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                Are you sure you deleted it?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
        </Layout>
    )
}