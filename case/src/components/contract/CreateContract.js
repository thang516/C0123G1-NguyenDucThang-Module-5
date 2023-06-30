import './CreateContract.css'
import {useNavigate} from "react-router-dom";
import Layout from "../views/Layout";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

import {toast} from "react-toastify";
import {LineWave} from "react-loader-spinner";
import * as serviceContract from "../service/ContractService"
import * as serviceCustomer from "../service/CustomerService"
import * as serviceSer from "../service/ServicesSer"
import * as Yup from "yup";

export function CreateContract() {
const navigate = useNavigate();
    const [customer,setCustomer] = useState();
    const [service,setService] = useState([]);
    const [serviceId,setServiceId] = useState(0);
    const customerList = async () => {
        const res = await serviceCustomer.getAll();
        setCustomer(res)
    }
    const serviceList = async () =>{
        const res = await serviceSer.getAll();
        setService(res);
    }


    useEffect(() =>{
        serviceList();
        customerList();
    },[])
        if (!service){
            return null
        }
    console.log(service.find((ser) => ser.id == serviceId)?.rentalCost);
    return(
        <Layout>
        <>
        <Formik initialValues={{
           id : '',
            contractCode : "",
            customerList: "",
            serviceList: "",
            dayStart: "",
            endDay: "",
            deposit: 0,
            total:0
        }}
                validationSchema={
                    Yup.object({
                        contractCode: Yup.string().required(),
                        customerList: Yup.string().required(),
                        serviceList: Yup.string().required(),
                        deposit: Yup.number().required()

                    })
                }
                onSubmit={(values ,{setSubmitting}) => {
            setSubmitting(false);
            const create = async () => {
                values ={
                    ...values,
                    total:service.find((ser) => ser.id == serviceId)?.rentalCost
                }
                await  serviceContract.save(values)
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

                                    <div style={{textAlign: "center",marginTop :"20px"}}>
                                        <h1>Create Contract</h1>
                                    </div>
                                    <Form>
                                        <div className="mt-4 inputs"><label>Contract Code</label>
                                            <Field  type="text"  name="contractCode" className="form-control"/>
                                            <ErrorMessage name='contractCode' component='span' className='form-err'/>
                                        </div>
                                        <div className="mt-4 inputs"><label>Customer List</label>
                                            <Field as="select"   name="customerList" style={{width: "100%", height: "40px"}}>
                                                <option defaultValue="">Select</option>
                                                {
                                                    customer &&  customer.map((cus) => (
                                                       <option key={cus.id} value={cus.id}>
                                                           {cus.name}
                                                       </option>
                                                   ))
                                                }

                                                </Field>
                                            <ErrorMessage name='customerList' component='span' className='form-err'/>
                                        </div>
                                        <div className="mt-4 inputs"><label>Name Service</label>
                                            <Field as="select"    onClick={(event)=>setServiceId(event.target.value)}   name="serviceList" style={{width: "100%", height: "40px"}}>
                                                <option defaultValue="">Select</option>
                                                {
                                                    service  &&  service.map((ser) => (
                                                        <option key={ser.id} value={ser.id}>
                                                            {ser.name}
                                                        </option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name='serviceList' component='span' className='form-err'/>

                                        </div>

                                        <div className="mt-2 inputs"><label>Date Start</label>
                                            <Field type="date" name="dayStart" className="form-control"
                                            />

                                        </div>


                                        <div className="mt-2 inputs"><label>End Date</label>
                                            <Field type="date" name="endDay" className="form-control"/>
                                        </div>


                                        <div className="mt-2 inputs"><label>Advance Amount</label>
                                            <Field className="form-control" name="deposit" type="number"/>
                                            <ErrorMessage name='deposit' component='span' className='form-err'/>
                                        </div>
                                            <h3 style={{marginTop :"30px"}}>Total Money :{service.find((ser)=> ser.id==serviceId)?.rentalCost}</h3>



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