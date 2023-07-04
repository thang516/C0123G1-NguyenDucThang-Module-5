import {Field, Formik, Form, ErrorMessage} from "formik";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import {LineWave} from "react-loader-spinner"
import {useParams} from "react-router";
import {renderToReadableStream} from "react-dom/server";
import * as serviceSer from "../service/ServicesSer"
export function UpdateSer() {
    const navigate = useNavigate();
    const param = useParams();
    const [service,setService] = useState();
    const [typeService,setTypeService] = useState();

    const getById = async () => {
        const res =await  serviceSer.findById(param.id)
        setService(res)
    }
    useEffect(() => {
        getById();
    },[])


    useEffect(() => {
        const typeService = async ()=> {
            const res = await serviceSer.getAllType();
            setTypeService(res);
        }
       typeService();
    },[param.id])
    if(!service){
        return null
    }

    return (
        <>
            <Formik initialValues={{
                id: service?.id,
                typeId: service?.typeId,
                name: service?.name,
                area: service?.area,
                rentalCost: service?.rentalCost,
                maxPeople: service?.maxPeople,
                rentalType: service?.rentalType,
                descriptionOtherAmenities: service?.descriptionOtherAmenities,
                roomStandard: service?.roomStandard,
                floors: service?.floors,
                areaSwimming: service?.areaSwimming,
                freeServiceIncluded: service?.freeServiceIncluded,
                img: service?.img
            }}
                    onSubmit={(values) => {
                        const update = async () => {

                            await serviceSer.updateService({
                                ...values,typeId :  +values.typeId
                            })
                            navigate("/")
                        }
                        update();
                    }}>
                {
                    ({
                         isSubmitting,
                         values
                     }) => {
                        return (
                            <div className="container mt-5 mb-5 ">
                                <div
                                    className="row height d-flex justify-content-center align-items-center"

                                >
                                    <div className="col-md-6">
                                        <div className="card px-5 py-4">
                                            <div style={{textAlign: "center"}}>
                                                <h2 style={{color: "black"}}>Update Service</h2>
                                            </div>
                                            <Form>

                                                <div className=" mt-4 inputs">
                                                    <label>Type</label>
                                                    <Field as="select" name="typeId" className="form-control"
                                                           data-error="Please specify your need.">
                                                        {
                                                            typeService && typeService.map((type)=>(
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
                                                         style={{paddingLeft: "0"}}>
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
                                                {
                                                    (Number(values.typeId) ===1 || Number(values.typeId)===3)
                                                    &&       <div className="mt-4 ">
                                                        <label>Description Of Other Amenities </label>
                                                        <Field
                                                            type="text" className="form-control"
                                                            name="descriptionOtherAmenities"/>
                                                    </div>

                                                }

                                                <div className="row mt-4  ">

                                                    {
                                                        (Number(values.typeId)=== 1 ||  Number(values.typeId)=== 3)  &&
                                                        <div className="col-md-6 form-group" style={{paddingLeft: "0"}}>
                                                            <label>Floor </label>
                                                            <Field
                                                                type="text"
                                                                name="floors" className="form-control"/>
                                                        </div>

                                                    }
                                                    {
                                                        (Number(values.typeId)=== 1 ||  Number(values.typeId)=== 3) &&
                                                        <div className="col-md-6 form-group mt-3 mt-md-0"
                                                             style={{paddingLeft: "0"}}>
                                                            <label> Room Standard</label>
                                                            <Field type="text" className="form-control" name="roomStandard"/>
                                                        </div>
                                                    }

                                                </div>
                                                <div className="row mt-4">
                                                    {
                                                        Number(values.typeId)===3 &&
                                                        <div className="col-md-6 form-group" style={{paddingLeft: "0"}}>
                                                            <label>Area Swimming pool </label>
                                                            <Field
                                                                type="text" name="areaSwimming" className="form-control"/>
                                                        </div>
                                                    }
                                                    {
                                                        Number(values.typeId) ===2 &&
                                                        <div className="col-md-6 form-group mt-3 mt-md-0"
                                                             style={{paddingLeft: "0"}}>
                                                            <label>Free Service Included </label>
                                                            <Field   className="form-control"
                                                                     name="freeServiceIncluded">
                                                            </Field>
                                                        </div>
                                                    }


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
                                                        <div className="text-center mt-4 btn-group">
                                                            <button type="submit" className=" btn btn-success">
                                                                <b className="text-center">Update</b>
                                                            </button>
                                                        </div>
                                                }
                                                <div className="text-center mt-4 btn-group">
                                                    <button type="submit"
                                                            className=" btn btn-success integration"
                                                            onClick={() => navigate('/')}
                                                            style={{backgroundColor: "black"}}>
                                                        <b>Back</b>
                                                    </button>
                                                </div>

                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                }

            </Formik>

        </>
    )
}