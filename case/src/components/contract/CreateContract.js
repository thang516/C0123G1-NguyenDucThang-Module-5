import './CreateContract.css'
import {useNavigate} from "react-router-dom";
import Layout from "../views/Layout";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

import {toast} from "react-toastify";
import {LineWave} from "react-loader-spinner";
import * as serviceCustomer from "../service/CustomerService"
import * as serviceSer from "../service/ServicesSer"
import * as serviceContract from "../service/ContractService"
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

export function CreateContract() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [service, setService] = useState([]);
    const [serviceId, setServiceId] = useState(0);

    const customerList = async () => {
        const res = await serviceCustomer.getAll();
        setCustomer(res)
    }
    const serviceList = async () => {
        const res = await serviceSer.getAll();
        setService(res);
    }

    const handleChangeDate = (date, setFieldValue, type) => {
        const newDate = moment(date).format('MM-DD-YYYY');
        setFieldValue(type, newDate);
    };

    useEffect(() => {
        serviceList();
        customerList();
    }, [])
    if (!service) {
        return null
    }
    const weekend = (date) => new Date() < date;

    return (
        <Layout>
            <>
                <Formik initialValues={{
                    id: '',
                    contractCode: "",
                    customerList: "",
                    serviceList: "",
                    dayStart: moment().format('MM-DD-YYYY'),
                    endDay: moment().format('MM-DD-YYYY'),
                    deposit: 1,
                    total: 0
                }}
                        validationSchema={
                            Yup.object({
                                contractCode: Yup.string().required(),
                                customerList: Yup.string().required(),
                                serviceList: Yup.string().required(),
                                deposit: Yup.number().required().min(1)

                            })
                        }
                        onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(false);
                            console.log(values)
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
                        }}>
                    {
                        ({values, isSubmitting, setFieldValue}) => {
                            console.log(values);
                            return (
                                <div className="container mt-5 mb-5">
                                    <div className="row height d-flex justify-content-center align-items-center">
                                        <div className="col-md-6">
                                            <div className="card px-5 py-4">

                                                <div style={{textAlign: "center", marginTop: "20px"}}>
                                                    <h1>Create Contract</h1>
                                                </div>
                                                <Form>
                                                    <div className="mt-4 inputs"><label>Contract Code</label>
                                                        <Field type="text" name="contractCode"
                                                               className="form-control"/>
                                                        <ErrorMessage name='contractCode' component='span'
                                                                      className='form-err'/>
                                                    </div>
                                                    <div className="mt-4 inputs"><label>Customer List</label>
                                                        <Field as="select" name="customerList"
                                                               style={{width: "100%", height: "40px"}}>
                                                            <option defaultValue="">Select</option>
                                                            {
                                                                customer && customer.map((cus) => (
                                                                    <option key={cus.id} value={cus.id}>
                                                                        {cus.name}
                                                                    </option>
                                                                ))
                                                            }

                                                        </Field>
                                                        <ErrorMessage name='customerList' component='span'
                                                                      className='form-err'/>
                                                    </div>
                                                    <div className="mt-4 inputs"><label>Name Service</label>
                                                        <Field as="select"
                                                               onClick={(event) => setServiceId(event.target.value)}
                                                               name="serviceList"
                                                               style={{width: "100%", height: "40px"}}>
                                                            <option defaultValue="">Select</option>
                                                            {
                                                                service && service.map((ser) => (
                                                                    <option key={ser.id} value={ser.id}>
                                                                        {ser.name}
                                                                    </option>
                                                                ))
                                                            }

                                                        </Field>
                                                        <ErrorMessage name='serviceList' component='span'
                                                                      className='form-err'/>

                                                    </div>

                                                    <div className="mt-2 inputs date-contact"><p>Date Start</p>
                                                        <DatePicker  selected={moment(values.dayStart).toDate()}
                                                                    name="dayStart"
                                                                    onChange={(date) => handleChangeDate(date, setFieldValue, 'dayStart')}
                                                              style={{width : "445px !important"}}      minDate={moment().toDate()}/>

                                                    </div>


                                                    <div className="mt-2 inputs date-contact" ><p>End Date</p>
                                                        <DatePicker selected={moment(values.endDay).toDate()}
                                                                    name="endDay"
                                                                    onChange={(date) => handleChangeDate(date, setFieldValue, 'endDay')}
                                                                    minDate={moment(values.dayStart).toDate()}
                                                        />
                                                    </div>


                                                    <div className="mt-2 inputs"><label>Advance Amount</label>
                                                        <Field className="form-control" name="deposit" type="number"/>
                                                        <ErrorMessage name='deposit' component='span'
                                                                      className='form-err'/>
                                                    </div>
                                                    <h3 style={{marginTop: "30px"}}>Total Money :
                                                        ${service.find((ser) => ser.id == serviceId)?.rentalCost}</h3>


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
                                                                <button type="submit"
                                                                        className=" btn btn-success integration">
                                                                    <b>Create</b>
                                                                </button>

                                                            </div>
                                                    }

                                                </Form>
                                                <div className="text-center mt-4 btn-group">
                                                    <button type="submit" className=" btn btn-success integration"
                                                            onClick={() => navigate('/contract')}
                                                            style={{backgroundColor: "black"}}>
                                                        <b>Back</b>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </Formik>


            </>
        </Layout>
    )
}