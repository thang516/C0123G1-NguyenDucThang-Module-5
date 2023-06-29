import './contract.css'
import Layout from "../views/Layout";
import React, {useEffect, useState} from "react";
import axios from "axios";
import sweat from "sweetalert2"
import * as serviceContract from "../service/ContractService"
import {useNavigate} from "react-router-dom";

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

    return (


        <Layout>
            <>
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
                        <th>Total Money Payment</th>
                        <th>Function</th>


                    </tr>
                    </thead>
                    <tbody>
                    {
                        contract.map((contracts) => (
                            <tr key={contracts.id}>
                                <td>{contracts.id}</td>
                                <td> {contracts.contractCode}</td>
                                <td>{contracts.dayStart} </td>
                                <td>{contracts.endDay} </td>
                                <td> {contracts.deposit}</td>
                                <td>{contracts.totalMoney} </td>
                                <td>
                                    <button className="btn btn-success" style={{backgroundColor: "#149570"}} onClick={()=>navigate("/updateContract/"+contracts.id)}>Edit
                                    </button>
                                    <button className="btn btn-success"   onClick={() => deleteContract(contracts.id, contracts.contractCode)} type="button" style={{backgroundColor: "#ff0039"}}  >Delete
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
                                                <li className="page-item"><a className="page-link" href="#"
                                                                             data-abc="true"><i
                                                    className="fa fa-angle-left"/></a></li>
                                                <li className="page-item active"><a className="page-link" href="#"
                                                                                    data-abc="true">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#"
                                                                             data-abc="true">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#"
                                                                             data-abc="true">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#"
                                                                             data-abc="true">4</a></li>
                                                <li className="page-item"><a className="page-link" href="#"
                                                                             data-abc="true"><i
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

                </div>

            </>
        </Layout>
    )
}