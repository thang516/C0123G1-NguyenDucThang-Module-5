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
import {Field, Form, Formik} from "formik";
export function Customer() {
    const navigate = useNavigate();
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

    const deleteById = async (id)=> {
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
                currentItems.map((customer) => (

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

                                    <button className="btn btn-success" type="button" style={{backgroundColor:"#ff0039",    margin: "5px"}}
                                            onClick={()=>deleteCustomer(customer.id,customer.name)} >Delete
                                    </button>
                                </td>
                            </tr>
                    ))
                }

            </>
        );
    }

    function PaginatedItems({currentItems}) {


        return (
            <>
                <Items currentItems={currentItems} />

            </>
        );
    }
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage =3;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = customers.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(customers.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % customers.length;
        setItemOffset(newOffset);
    };


    return(
        <Layout>
        <>
        <Formik initialValues={{
            name:'',
            phoneNumber:''
        }}
                onSubmit={(values )=> {
                    console.log(values)
                    const search = async () =>{
                     const  res =   await  customerService.findByName(values.name,values.phoneNumber)
                        setCustomer(res)
                    }
                    search();
                }}>

            <Form className="d-flex" style={{    marginTop: "20px",  marginBottom: "20px",   justifyContent: "flex-end"}}>
                <Field
                    style={{backgroundColor: "white",width:" 20vw",marginRight:"20px"}}
                    className="form-control"      type="text"     placeholder="Search By Name"   name='name' />
                <Field
                    style={{backgroundColor: "white",width:"20vw",marginRight:"20px"}}
                    className="form-control"   type="text"   placeholder="Search By Phone"   name='phoneNumber'
                />

                <button  className="btn btn-secondary my-2 my-sm-0"  style={{backgroundColor: "black",marginRight :"20px"}}       type="submit"    >
                    Search
                </button>
                <button   className="btn btn-secondary my-2 my-sm-0"  style={{backgroundColor: "black"}} type={"reset"} >
                    Back
                </button>
            </Form>


        </Formik>
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
                     <th>      Function</th>
                 </tr>
                 </thead>
                <tbody>
                <PaginatedItems currentItems={currentItems}/>

                </tbody>
            </table>
            <div className="pagination-card" style={{marginTop:"20px"}}>
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