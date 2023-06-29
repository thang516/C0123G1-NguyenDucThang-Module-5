import './customer.css'
import Layout from "../views/Layout";
import React, {useEffect, useState} from "react";
import axios from "axios";
import sweat from "sweetalert2"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from "react-router-dom";
import * as customerService from "../service/CustomerService"
import {getAllTypeCustomer} from "../service/CustomerService";
import ReactPaginate from "react-paginate";
export function Customer() {
    const navigate = useNavigate()
    const [customers,setCustomer] = useState([])
    const [typeCustomer,setTypeCustomer] = useState([])

    useEffect(()=> {
        getAllList();
        typeCustomerList()
    },[])
    const typeCustomerList = async () =>{
        const res = await  customerService.getAllTypeCustomer();
        setTypeCustomer(res)
    }

    console.log(typeCustomer);

    const  getAllList = async () => {
            const result = await customerService.getAll()
            setCustomer(result)

    }

    const deleteById = async (id)=>{
            await  customerService.deleteCustomer(id);
             sweat.fire({
                icon: "success",
                title: "SUCCESSFULL",
                timer: "2000"
            })

        getAllList()
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


    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                customers.map((customer) => (

                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{ typeCustomer && typeCustomer.find(item=>item.id === customer.typeCustomerId)?.nameType}</td>
                            <td>{customer.dayOfBirth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.identityCard}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button className="btn btn-success" onClick={()=> navigate('/updateCustomer/'+customer.id)} style={{backgroundColor: "#149570"}}>Edit</button>

                                <button className="btn btn-success" type="button" style={{backgroundColor:"#ff0039"}}
                                        onClick={()=>deleteCustomer(customer.id,customer.name)} >Delete
                                </button>
                            </td>

                        </tr>

                    ))
                }



                ))}
            </>
        );
    }

    function PaginatedItems({ itemsPerPage , list}) {
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = list.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(list.length / itemsPerPage);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % list.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
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
            </>
        );
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
                {/*{*/}
                {/*//     customers.map((customer) => (*/}
                {/*//         <tr key={customer.id}>*/}
                {/*//             <td>{customer.id}</td>*/}
                {/*//             <td>{customer.name}</td>*/}
                {/*//             <td>{ typeCustomer && typeCustomer.find(item=>item.id === customer.typeCustomerId)?.nameType}</td>*/}
                {/*//             <td>{customer.dayOfBirth}</td>*/}
                {/*//             <td>{customer.gender}</td>*/}
                {/*//             <td>{customer.identityCard}</td>*/}
                {/*//             <td>{customer.phoneNumber}</td>*/}
                {/*//             <td>{customer.email}</td>*/}
                {/*//             <td>{customer.address}</td>*/}
                {/*//             <td>*/}
                {/*//                 <button className="btn btn-success" onClick={()=> navigate('/updateCustomer/'+customer.id)} style={{backgroundColor: "#149570"}}>Edit</button>*/}
                {/*//*/}
                {/*//                 <button className="btn btn-success" type="button" style={{backgroundColor:"#ff0039"}}*/}
                {/*//                      onClick={()=>deleteCustomer(customer.id,customer.name)} >Delete*/}
                {/*//                 </button>*/}
                {/*//             </td>*/}
                {/*//*/}
                {/*//         </tr>*/}
                {/*//*/}
                {/*//     ))*/}
                {/*// }*/}
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