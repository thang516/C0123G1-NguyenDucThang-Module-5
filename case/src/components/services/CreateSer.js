import {Field, Formik, Form, ErrorMessage} from "formik";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import {LineWave} from "react-loader-spinner"
import * as serviceSer from "../service/ServicesSer"
export function CreateSer() {
    const navigate = useNavigate();
    const [typeService,setTypeService] = useState();
    useEffect(() =>{
        const typeService = async () =>{
            const  res = await  serviceSer.getAllType()
            setTypeService(res);
        }
        typeService()
    },[])

    return (
        <>
            <Formik initialValues={{
                id: '',
                typeId: 1,
                name: '',
                area: '',
                rentalCost: '',
                maxPeople: '',
                rentalType: '',
                descriptionOtherAmenities: '',
                roomStandard: '',
                floors: '',
                areaSwimming: '',
                freeServiceIncluded: '',
                img: ''
            }}
                    validationSchema={Yup.object({
                        typeId: Yup.number(),
                        name: Yup.string()
                            .required(),
                        area: Yup.number()
                            .required(),
                        rentalCost: Yup.number()
                            .required(),
                        maxPeople: Yup.number()
                            .required(),
                        rentalType: Yup.string()
                            .required(),
                        descriptionOtherAmenities: Yup.string()
                            .required(),
                        img: Yup.string()
                            .required(),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        const create = async () => {
                            setSubmitting(false);
                            await serviceSer.save({
                                ...values ,typeId : +values.typeId
                            })
                            toast(`Services ${values.name} Create Successfully !`)
                            navigate("/")
                        }
                        create();
                    }}>
                {
                    ({isSubmitting}) => (

                        <div className="container mt-5 mb-5 ">
                            <div
                                className="row height d-flex justify-content-center align-items-center"

                            >
                                <div className="col-md-6">
                                    <div className="card px-5 py-4">
                                        <div style={{textAlign: "center"}}>
                                            <h2 style={{color: "black"}}>Create Service</h2>
                                        </div>
                                        <Form>

                                            <div className=" mt-4 inputs">
                                                <label>Type</label>
                                                <Field as="select" name="typeId" className="form-control"
                                                       data-error="Please specify your need.">
                                                    {
                                                        typeService &&   typeService.map((type)=>(
                                                            <option key={type.id} value={type.id} >
                                                                {type.nameType}
                                                            </option>
                                                        ))

                                                    }
                                                </Field>
                                            </div>
                                            <div className=" mt-4 inputs">
                                                <label>Name</label>
                                                <Field type="text" className="form-control" name="name"
                                                />
                                                <ErrorMessage name="name" component="span" className="error-r"/>

                                            </div>
                                            <div className=" mt-4 inputs">
                                                <label>Area</label>
                                                <Field type="number" className="form-control" name="area"/>
                                                <ErrorMessage name="area" component="span" className="error-r"/>
                                            </div>

                                            <div className="row mt-4  ">
                                                <div className="col-md-6 form-group" style={{paddingLeft: "0"}}>
                                                    <label>Rental Cost</label>
                                                    <Field type="number" name="rentalCost" className="form-control"/>
                                                    <ErrorMessage name="rentalCost" component="span"
                                                                  className="error-r"/>

                                                </div>
                                                <div className="col-md-6 form-group mt-3 mt-md-0"
                                                     style={{paddingRight: "0"}}>
                                                    <label>Maximum People</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="maxPeople"/>
                                                    <ErrorMessage name="maxPeople" component="span"
                                                                  className="error-r"/>

                                                </div>
                                            </div>
                                            <div className="mt-4 inputs">
                                                <label>Rental Type</label>
                                                <Field name="rentalType" className="form-control" as="select">
                                                    <option value="Year">Year</option>
                                                    <option value="Month">Month</option>
                                                    <option value="Day">Day</option>
                                                    <option value="Hour">Hour</option>
                                                </Field>
                                                <ErrorMessage name="rentalType" component="span" className="error-r"/>

                                            </div>
                                            <div className="mt-4 ">
                                                <label>Description Of Other Amenities </label>
                                                <Field
                                                    type="text" className="form-control"
                                                    name="descriptionOtherAmenities"/>
                                            </div>
                                            <div className="row mt-4  ">
                                                <div className="col-md-6 form-group" style={{paddingLeft: "0"}}>
                                                    <label>Floor</label>
                                                    <Field
                                                        type="text"
                                                        name="floors" className="form-control"/>
                                                </div>
                                                <div className="col-md-6 form-group mt-3 mt-md-0"
                                                     style={{paddingRight: "0"}}>
                                                    <label> Room Standard</label>
                                                    <Field type="text" className="form-control" name="roomStandard"/>
                                                </div>
                                            </div>
                                            <div className="row mt-4  ">
                                                <div className="col-md-6 form-group" style={{paddingLeft: "0"}}>
                                                    <label>Area Swimming pool</label>
                                                    <Field
                                                        type="text" name="areaSwimming" className="form-control"/>
                                                </div>
                                                <div className="col-md-6 form-group mt-3 mt-md-0"
                                                     style={{paddingRight: "0"}}>
                                                    <label>Free Service Included</label>
                                                    <input type="text" className="form-control"
                                                           name="freeServiceIncluded"/>
                                                </div>
                                            </div>
                                            <div className=" mt-4 inputs">
                                                <label>Img</label>
                                                <Field type="text" className="form-control" name="img"/>
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
                                                    <div className="text-center m-auto mt-4">
                                                        <button type="submit" className=" btn btn-success">
                                                            <b className="text-center">Create</b>
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