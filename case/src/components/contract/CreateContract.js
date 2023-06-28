import './CreateContract.css'
import {useNavigate} from "react-router-dom";
import Layout from "../views/Layout";
import React from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {toast} from "react-toastify";
import {LineWave} from "react-loader-spinner";
export function CreateContract() {
const navigate = useNavigate();

    return(
        <Layout>
        <>
        <Formik initialValues={{
           id : '',
            contractCode : "",
            dayStart: "",
            endDay: "",
            deposit: 0,
            totalMoney: 0
        }}
                onSubmit={(values ,{setSubmitting}) => {
            setSubmitting(false);
            const create = async () => {
                await  axios.post("http://localhost:8080/contract",values)
                toast(`Contract ${values.contractCode} Create Successfully`)
                navigate("/contract")
            }
            create();
        } }>
            {
                ({isSubmitting}) =>(
                    <div className="container mt-5 mb-5">
                        <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card px-5 py-4">

                                    <div style={{textAlign: "center"}}>
                                        <h1>Create Contract</h1>
                                    </div>
                                    <Form>
                                        <div className="mt-4 inputs"><span>Contract Code</span>
                                            <Field type="text"  name="contractCode" className="form-control"/>
                                        </div>

                                        <div className="mt-2 inputs"><span>Date Start</span>
                                            <Field type="date" name="dayStart" className="form-control"
                                            />
                                        </div>


                                        <div className="mt-2 inputs"><span>End Date</span>
                                            <Field type="date" name="endDay" className="form-control"/>
                                        </div>


                                        <div className="mt-2 inputs"><span>Advance Amount</span>
                                            <Field className="form-control" name="deposit" type="number"/>
                                        </div>


                                        <div className="mt-2 inputs"><span>Total Money Payment</span>
                                            <Field className="form-control" name="totalMoney" type="number"/>

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
                                                    <button type="submit" className=" btn btn-success integration">
                                                        <b>Create</b>
                                                    </button>

                                                </div>
                                        }

                                    </Form>
                                    <div className="text-center mt-4 btn-group">
                                        <button type="submit" className=" btn btn-success integration" onClick={()=> navigate('/contract')}
                                                style={{backgroundColor:"black"}}>
                                            <b>Back</b>
                                        </button>
                                    </div>
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