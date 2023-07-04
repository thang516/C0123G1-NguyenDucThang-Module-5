import './contract.css'
import Layout from "../views/Layout";
import React, {useEffect, useState} from "react";
import axios from "axios";
import sweat from "sweetalert2"
import * as serviceContract from "../service/ContractService"
import {useNavigate} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {Field, Form, Formik} from "formik";
import * as customerService from "../service/CustomerService";
import * as contractService from "../service/ContractService";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function Contract() {
    const [contract, setContract] = useState([])
const navigate= useNavigate();
    const findAll =async () =>{
        const result = await  serviceContract.getAll();
        setContract(result)
    }


    useEffect(() => {
        findAll();
    }, [])

    const deleteById = async (id) => {
           await  serviceContract.deleteContract(id)
            sweat.fire({
                icon: "success",
                title: "SUCCESSFULLY",
                timer: "2000"
            })
      findAll()
    }

    function deleteContract(id, contractCode) {
        sweat.fire({
                icon: "warning",
                title: `Do you want to delete ${contractCode} ?`,
                showCancelButton: true,
                confirmButtonText: "OK"
            }
        ).then(async (isDelete) => {
            if (isDelete.isConfirmed) {
                deleteById(id);

            }
        })

    }


    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                currentItems.map((contracts) => (
                            <tr key={contracts.id}>
                                <td>{contracts.id}</td>
                                <td> {contracts.contractCode}</td>
                                <td>{contracts.dayStart} </td>
                                <td>{contracts.endDay} </td>
                                <td> ${contracts.deposit}</td>
                                <td> ${contracts.total}</td>
                                <td>
                                    <button className="btn btn-success" style={{backgroundColor: "#149570",margin:"5px"}} onClick={()=>navigate("/updateContract/"+contracts.id)}>Edit
                                    </button>
                                    <button className="btn btn-success"   onClick={() => deleteContract(contracts.id, contracts.contractCode)} type="button" style={{backgroundColor: "#ff0039"}}  >Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

            </>
        );
    }

    function PaginatedItems({ currentItems}) {
        return (
            <>
                <Items currentItems={currentItems} />
            </>
        );
    }
    const itemsPerPage = 3;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = contract.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(contract.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % contract.length;
        setItemOffset(newOffset);
    };

    return (


        <Layout>
            <>

                <Formik  initialValues={{
                    deposit : ''
                }} onSubmit={ (values) => {
                    const search = async () =>{
                        const  res =   await  contractService.findByDeposit(values.deposit)
                        setContract(res)
                    }
                    search();
                }}>

                    <Form className="d-flex" style={{    marginTop: "20px",  marginBottom: "20px",   justifyContent: "flex-end"}}>
                        <Field
                            style={{backgroundColor: "white",width:" 20vw",marginRight:"20px"}}
                            className="form-control"      type="text"     placeholder="Search By Deposit"   name='deposit' />
                            
                        <button  className="btn btn-secondary my-2 my-sm-0"  style={{backgroundColor: "black",marginRight :"20px"}} type="submit">
                            Search
                        </button>
                        <button   className="btn btn-secondary my-2 my-sm-0"  style={{backgroundColor: "black"}} type={"reset"} >
                            Back
                        </button>
                    </Form>


                </Formik>
                <div style={{textAlign: "center"}}>
                    <h1>Contract List</h1>

                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Contract Code</th>
                        <th>Day Start</th>
                        <th>End Day</th>
                        <th>Deposit</th>
                        <th>Total Money</th>
                        <th>Function</th>


                    </tr>
                    </thead>
                    <tbody>
                        <PaginatedItems currentItems={currentItems}/>
                    </tbody>
                </table>
                <div className="pagination-card">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
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