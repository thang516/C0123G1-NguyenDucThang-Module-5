import "./updateCustomer.css"
import {useNavigate} from "react-router-dom"
import Layout from "../views/Layout";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {LineWave} from "react-loader-spinner"

export function CreateCustomer() {
    const navigate = useNavigate();
    return(
  <Layout>
    <>
        <Formik initialValues={{
            name: "",
            type: "",
            dayOfBirth : "",
            gender: "",
            identityCard: "",
            phoneNumber : "",
            email : "",
            address: ""

        }}
                validationSchema={Yup.object({
                    name: Yup.string().required(),

                    identityCard:Yup.string().required()

                })}
                onSubmit={(values,{setSubmitting})=>{
                    const create = async() => {
                        setSubmitting(false)
                         await axios.post("http://localhost:8080/customer",values)
                        toast(`Customer ${values.name} create successfully `)
                        console.log(values)
                        navigate("/customer")
                    }
                    create()
                }}>
            {
                ({isSubmitting}) =>(

                    <div className="container mt-5 mb-5">
                        <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card px-5 py-4">

                                    <div style={{textAlign: "center"}}>
                                        <h1>Create Customer</h1>
                                    </div>
                                    <Form>
                                        <div className="mt-4 inputs"><label>Name Customer</label>
                                            <Field type="text" name='name' className="form-control"/>
                                            <ErrorMessage name='name' component='span' className='form-err' />

                                        </div>

                                        <div className="mt-2 inputs"><label>Type Customer</label>
                                            <Field  as="select"  name="type" style={{width: "100%",height: "40px"}}>
                                                <option value="Diamond">Diamond</option>
                                                <option value="Platinum">Platinum</option>
                                                <option value="Gold">Gold</option>
                                                <option value="Silver">Silver</option>
                                                <option value="Member">Member</option>
                                            </Field>
                                        </div>


                                        <div className="mt-2 inputs"><label>Day Of Birth</label>
                                            <Field type="date" name='dayOfBirth' className="form-control"/>
                                        </div>
                                        <div className="mt-2 inputs"><label>Gender</label>
                                            <Field as="select" name="gender" style={{width: "100%",height: "40px"}}>
                                                <option value="Male">Male</option>
                                                <option value="FeMale">FeMale</option>
                                                <option value="other">other</option>
                                            </Field>
                                        </div>


                                        <div className="mt-2 inputs"><label>Identity Card</label>
                                            <Field name='identityCard' className="form-control" type="number"/>
                                            <ErrorMessage name='identityCard' component='span' className='form-err' />

                                        </div>

                                        <div className="mt-2 inputs"><label>Phone Number</label>
                                            <Field  name='phoneNumber' className="form-control" type="number"/>
                                        </div>


                                        <div className="mt-2 inputs"><label>Email</label>
                                            <Field name='email' className="form-control" type="text"/>
                                        </div>
                                        <div className="mt-2 inputs"><label>Address</label>
                                            <Field name='address' className="form-control" type="text"/>

                                        </div>
                                        {
                                            isSubmitting ?

                                                <LineWave
                                                    height="100"
                                                    width="100"
                                                    color="#4fa94d"
                                                    ariaLabel="line-wave"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                    visible={true}
                                                    firstLineColor=""
                                                    middleLineColor=""
                                                    lastLineColor=""
                                                />
                                                :
                                                <div className="text-center mt-4 btn-group">
                                                    <button type="submit" className=" btn btn-success integration" >
                                                        <b>Create</b>
                                                    </button>
                                                    <button type="submit" className=" btn btn-success integration" onClick={() => navigate('/customer')}
                                                            style={{backgroundColor:"black"}}>
                                                        <b>Back</b>
                                                    </button>
                                                </div>
                                        }

                                    </Form>

                                </div>

                            </div>
                        </div>
                    </div>

                )
            }

        </Formik>

    </>
  </Layout>
)

}