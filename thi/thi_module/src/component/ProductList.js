import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as productService from "../service/ProductService"

import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Field, Form, Formik} from "formik";
import sweat from "sweetalert2";

export function ProductList() {

    const navigate = useNavigate();
    const [bill, setBill] = useState([]);

    const getAllBill = async () => {
        const res = await productService.getAllBill()
        setBill(res)
    }

    useEffect(() => {
        getAllBill();


    }, [])
    if (!bill) {
        return null
    }

    const deleteById = async (id) => {
        await productService.deleteById(id)
        sweat.fire({
            icon: "success",
            title: "SUCCESSFULLY",
            timer: "2000"
        })
        getAllBill();
    }

    function deleteBill(id, billCode) {
        sweat.fire({
                icon: "warning",
                title: `Do you want to delete ${billCode} ?`,
                showCancelButton: true,
                confirmButtonText: "OK"
            }
        ).then(async (isDelete) => {
            if (isDelete.isConfirmed) {
                deleteById(id);

            }
        })

    }


    return (
        <>
            {/*<Formik initialValues={{*/}
            {/*    productId: '',*/}
            {/*    date: ''*/}
            {/*}} onSubmit={(values) => {*/}
            {/*    const search = async () => {*/}
            {/*        const res = await productService.search(values.productId, values.date)*/}
            {/*        setBill(res)*/}
            {/*    }*/}

            {/*    search()*/}
            {/*}}>*/}
            {/*    {*/}

            {/*        <Form>*/}

            {/*            <Field placeholder='date' name='date' />*/}
            {/*            <Field name='productId' as='select'>*/}

            {/*                {*/}
            {/*                    product && product.map((pro) => (*/}
            {/*                        <option key={pro.id} value={pro.id}>{pro.nameProduct}</option>*/}
            {/*                    ))*/}
            {/*                }*/}
            {/*            </Field>*/}

            {/*            <button type='submit'>Search</button>*/}
            {/*        </Form>*/}
            {/*    }*/}

            {/*</Formik>*/}

            <table className=' table  table-striped'>
                <thead>
                <tr>


                    <th>ID</th>
                    <th>Mã đơn hàng</th>
                    <th>Ngày Mua</th>
                    <th>Tổng tiền(USD)</th>
                    <th>Số lượng</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá (USD)</th>
                    <th>Loại sản phẩm</th>


                    <th>Actior</th>
                </tr>
                </thead>
                <tbody>
                {

                    bill && bill.map((bil) => (

                        <tr key={bil.id}>
                            <td>{bil.id}</td>
                            <td>{bil.billCode}</td>
                            <td>{bil.date}</td>
                            <td>{bil.total}</td>
                            <td>{bil.amount}</td>
                            <td>{bil.productId.nameProduct}</td>
                            <td>{bil.productId.price}</td>
                            <td>{bil.productId.typeProduct}</td>

                            <td>
                                <button onClick={() => deleteBill(bil.id, bil.billCode)}>Delete</button>
                            </td>
                        </tr>

                    ))
                }
                </tbody>
            </table>
            <button onClick={() => navigate('/create')}>Create</button>


        </>
    )
}