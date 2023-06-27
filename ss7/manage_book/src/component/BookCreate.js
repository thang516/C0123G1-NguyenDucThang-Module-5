import React from "react";
import "./create.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify'
import {useNavigate} from "react-router-dom";
import {TailSpin} from "react-loader-spinner"
import 'react-toastify/dist/ReactToastify.css'
export function BookCreate() {
    const navigator = useNavigate();
    return(
        <>
            <Formik initialValues={{
                title : "",
                quantity : 0
            }}

                    validationSchema={Yup.object({
                        title: Yup.string().required("bắt buộc nhập"),
                        quantity: Yup.number()
                    })}
                    onSubmit={(values,{setSubmitting}) =>{
                        setSubmitting(false)
                        const create = async () =>{
                            await axios.post("http://localhost:8080/books",values)
                            console.log(values)
                            toast(`Book ${values.title} create successfully`);
                            navigator("/")
                        }
                         create();
                    } } >
                {
                    ({isSubmitting} )=> (
                   <Form>
                    <h1>Add a new Book</h1>
                       <div>
                           <label>Title</label>
                           <Field   className="form-control"  name='title'/>
                           <ErrorMessage name='title' component='span' className='form-err'/>
                       </div>
                        <div >
                            <label>Quantity</label>
                            <Field  className="form-control" name='quantity'/>
                            <ErrorMessage className='form-err' component='span' name='quantity'/>
                        </div>
                       {
                           isSubmitting ?
                               <TailSpin
                                   height="80"
                                   width="80"
                                   color="#4fa94d"
                                   ariaLabel="tail-spin-loading"
                                   radius="1"
                                   wrapperStyle={{}}
                                   wrapperClass=""
                                   visible={true}
                               />
                               :   <button type='submit' className='btn btn-success'>ADD</button>
                       }

                    </Form>

                    )
                }



            </Formik>

        </>
    )

}