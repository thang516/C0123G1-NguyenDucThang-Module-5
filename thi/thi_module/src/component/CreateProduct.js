import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import './create.css'
import * as productService from "../service/ProductService"
import * as sweat from "sweetalert2"
export function CreateProduct() {

    const navigate = useNavigate();
    const [product,setProduct] = useState()

    const getAllProduct = async () => {
        const res = await productService.getAllProduct();
        console.log(res)
        setProduct(res)
    }
    useEffect(() => {
        getAllProduct();
    },[])

    if(!product){
        return null
    }



    return (

        <>

            <Formik initialValues={{
                billCode : 0,
                date :'',
                total : 0,
                amount : 0,
                productId : ''
            }}
                    validationSchema={Yup.object({
                        billCode : Yup.number().required(),
                        date    :Yup.date().required().max(new Date(),'Không lon hon ngay hien tai'),
                        total :Yup.number().required(),
                        amount : Yup.number().required().min(0,'số lượng là số nguyên lớn hơn 0'),
                        productId : Yup.number().required(),
                    })}
                    onSubmit={(values) => {
                        const create = async () => {
                            values = {
                                billCode : values.billCode,
                                date : values.date,
                                total : values.total,
                                amount : values.amount,
                                productIdNumber : +values.productId
                            }
                            
                            await productService.save(values)
                            sweat.fire({
                                icon: 'success',
                                title:`Create  sucessfully `,
                                timer : "2000"
                            })
                            navigate("/")
                        }

                        create()

                    }}>

                {

                    <div className="container mt-5 mb-5">
                        <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card px-5 py-4">

                                    <div style={{textAlign: "center"}}>
                                        <h1>Create Bill</h1>
                                    </div>
                                    <Form>
                                        <div className="mt-4 inputs"><label>Mã đơn hàng</label>
                                            <Field type="number" className="form-control" name='billCode'/>
                                            <ErrorMessage component='span' className='form-err' name='billCode'/>
                                        </div>

                                        <div className="mt-4 inputs"><label>Ngày </label>
                                            <Field type="date" className="form-control" name='date'/>
                                            <ErrorMessage component='span' className='form-err' name='date'/>
                                        </div>

                                        <div className="mt-4 inputs"><label>Số Lượng</label>
                                            <Field type="number" className="form-control" name='amount'/>
                                            <ErrorMessage component='span' className='form-err' name='amount'/>
                                        </div>


                                        <div className="mt-4 inputs"><label>Product</label>
                                            <Field as='select' className="form-control" name='productId'>
                                                <option>----select-----</option>
                                                {
                                                    product && product.map((p) =>(
                                                        <option  key={p.id} value={p.id}>{p.nameProduct}</option>
                                                    ))
                                                }
                                            </Field>
                                            <ErrorMessage component='span' className='form-err' name='productId'/>
                                        </div>

                                        <div className="mt-4 inputs"><label>Tổng tiền</label>
                                            <Field type="number" className="form-control" name='total'/>
                                            <ErrorMessage component='span' className='form-err' name='total'/>
                                        </div>


                                        <div className="text-center mt-4 btn-group">
                                            <button type="submit" className=" btn btn-success integration">
                                                <b>Create</b>
                                            </button>
                                        </div>
                                        <div className="text-center mt-4 btn-group">
                                            <button type="submit" className=" btn btn-success integration"
                                                    style={{backgroundColor:"black"}}>
                                                <b>Back</b>
                                            </button>
                                        </div>
                                    </Form>

                                </div>

                            </div>
                        </div>
                    </div>


                }

            </Formik>




        </>
    )

}