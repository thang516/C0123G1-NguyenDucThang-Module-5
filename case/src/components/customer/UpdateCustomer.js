import './updateCustomer.css'
import Layout from "../views/Layout";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import * as customerService from "../service/CustomerService"
import {type} from "@testing-library/user-event/dist/type";
import {toast} from "react-toastify";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const param = useParams();
    const [customer, setCustomer] = useState();
    const [typeCustomer, setTypeCustomer] = useState();
    const findById = async () => {
        const res = await customerService.findById(param.id)
        setCustomer(res)
    }


    useEffect(() => {
        const  typeCustomerList = async ()=>{
            const res  = await  customerService.getAllTypeCustomer();
            setTypeCustomer(res);
        }
        typeCustomerList();
        findById();
    }, [])

    if (!customer) {
        return null
    }
    console.log(customer)
    return (
        <Layout>
            <>

                <Formik initialValues={{
                    id:  customer?.id,
                    name: customer?.name,
                    typeCustomerId: customer?.typeCustomerId,
                    dayOfBirth: customer?.dayOfBirth,
                    gender: customer?.gender,
                    identityCard: customer?.identityCard,
                    phoneNumber: customer?.phoneNumber,
                    email: customer?.email,
                    address: customer?.address
                }}

                        onSubmit={(values) => {
                    const update = async () => {

                        await customerService.updateCustomer({
                            ... values,
                            typeCustomerId: +values.typeCustomerId
                        })
                        toast(`Customer ${values.name} Update Successfully `)
                        navigate("/customer")
                    }
                    update()
                }}>
                    {
                        <div className="container mt-5 mb-5">
                            <div className="row height d-flex justify-content-center align-items-center">
                                <div className="col-md-6">
                                    <div className="card px-5 py-4">

                                        <div style={{textAlign: "center"}}>
                                            <h1>Update Customer</h1>
                                        </div>
                                        <Form>
                                            <div className="mt-4 inputs"><label>Name Customer</label>
                                                <Field type="text" name='name' className="form-control"/>

                                            </div>

                                            <div className="mt-2 inputs"><label>Type Customer</label>
                                                <Field as="select" name="typeCustomerId"
                                                       style={{width: "100%", height: "40px"}}>
                                                    {
                                                        typeCustomer && typeCustomer.map((type) => (
                                                            <option key={type.id} value={type.id}>
                                                                {type.nameType}
                                                            </option>
                                                        ))
                                                    }
                                                </Field>
                                            </div>


                                            <div className="mt-2 inputs"><label>Day Of Birth</label>
                                                <Field type="date" name='dayOfBirth' className="form-control"/>
                                            </div>
                                            <div className="mt-2 inputs"><label>Gender</label>
                                                <Field as="select" name="gender"
                                                       style={{width: "100%", height: "40px"}}>
                                                    <option value="Male">Male</option>
                                                    <option value="FeMale">FeMale</option>
                                                    <option value="other">other</option>
                                                </Field>
                                            </div>


                                            <div className="mt-2 inputs"><label>Identity Card</label>
                                                <Field name='identityCard' className="form-control" type="number"/>


                                            </div>

                                            <div className="mt-2 inputs"><label>Phone Number</label>
                                                <Field name='phoneNumber' className="form-control" type="number"/>
                                            </div>


                                            <div className="mt-2 inputs"><label>Email</label>
                                                <Field name='email' className="form-control" type="text"/>
                                            </div>
                                            <div className="mt-2 inputs"><label>Address</label>
                                                <Field name='address' className="form-control" type="text"/>

                                            </div>
                                            <div className="text-center mt-4 btn-group">
                                                <button type="submit"
                                                        className=" btn btn-success integration">
                                                    <b>Update</b>
                                                </button>

                                            </div>
                                        </Form>
                                        <div className="text-center mt-4 btn-group">
                                        <button type="submit"
                                                className=" btn btn-success integration"
                                                onClick={() => navigate('/customer')}
                                                style={{backgroundColor: "black"}}>
                                            <b>Back</b>
                                        </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    }
                </Formik>
            </>
        </Layout>
    )
}