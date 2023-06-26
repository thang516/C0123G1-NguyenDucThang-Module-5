import React from "react";
import "./contract.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'

export function Contract() {


    return (
        <>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("bạn không thể để trống"),
                        email: Yup.string().required("bạn không thể để trống").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "bạn nhập cho đúng định dạng của gmail"),
                        // .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,"bạn vui lòng nhập chuẩn định dạng gmail"),
                        phone: Yup.string().required("bạn không thể để trống").matches(/^(\+84|0)([35789])+([0-9]{8})$/, "bạn nhập cho đúng định dạng của phone"),
                        // .matches(/^(\+84|0)([35789])+([0-9]{8})$/,'Bạn nhập cho đúng dạng số điện thoại việt nam'),
                        message: Yup.string().required("bạn không được để trống")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                            toast(`Contract ${values.name} create OK`)
                            console.log(values)
                        }, 1000)

                    }}>
                {
                    ({isSubmitting}) => (<div className="container mt-5 mb-5">
                            <div className="row height d-flex justify-content-center align-items-center">
                                <div className="col-md-6">
                                    <div className="card px-5 py-4">

                                        <div style={{textAlign: "center"}}>
                                            <h1>Contract Form</h1>
                                        </div>
                                        <Form>
                                            <div className="mt-4 inputs"><span>Name </span>
                                                <Field type="text" className="form-control" name="name"/>
                                                <ErrorMessage name='name' component='span' className='error'/>
                                            </div>
                                            <div className="mt-2 inputs"><span>Email</span>
                                                <Field className="form-control" type="text" name="email"/>
                                                <ErrorMessage name="email" component='span' className='error'/>
                                            </div>

                                            <div className="mt-2 inputs"><span>Phone Number</span>
                                                <Field className="form-control" type="text" name="phone"/>
                                                <ErrorMessage name="phone" component="span" className='error'/>
                                            </div>


                                            <div className="mt-2 inputs"><span>Message</span>
                                                <Field className="form-control" name="message" component="textarea"/>
                                                <ErrorMessage name="message" component="span" className='error'/>


                                            </div>
                                            {
                                                isSubmitting ?
                                                    <Vortex
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="vortex-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="vortex-wrapper"
                                                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                                    />
                                                    :
                                                    <div className="text-center mt-4 btn-group">
                                                        <button type="submit" className=" btn btn-success integration">
                                                            <b>Create</b>
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
    )
}

