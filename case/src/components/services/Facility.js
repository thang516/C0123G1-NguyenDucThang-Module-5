import './facility.css'
import Layout from "../views/Layout";
import React, {useEffect, useState} from "react";
import axios from "axios";



export function Facility() {

    const [facility,setFacility] = useState([])
    useEffect(()=>{
        const fetchApi = async () =>{
            try {
                const result = await axios.get("http://localhost:8080/facility")
                setFacility(result.data)
            }catch (e) {
                console.log(e
                )
            }

        }
fetchApi()
    },[])

    return(
        <Layout>
            <>
                <div style={{textAlign:" center"}}>
                    <h1>Facility List</h1>

                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th> Type</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Rental Cost</th>
                        <th>Max People</th>
                        <th>Rental Type</th>
                        <th>Function</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        facility.map((facilities)=>(
                            <tr key={facilities.id}>
                                <td>{facilities.id}</td>
                                <td>{facilities.type}</td>
                                <td>{facilities.name}</td>
                                <td>{facilities.area}</td>
                                <td>{facilities.rentalCost}</td>
                                <td>{facilities.maxPeople}</td>
                                <td>{facilities.rentalType}</td>
                                <td>
                                    <button className="btn btn-success" style={{backgroundColor: "#149570"}}>Edit</button>
                                    <button className="btn btn-success" type="button" style={{backgroundColor:"#ff0039"}}
                                            data-bs-toggle="modal" data-bs-target="#exampleModal">Delete
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
            </>
        </Layout>
    )
}