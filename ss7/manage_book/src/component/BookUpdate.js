import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router";

export function BookUpdate() {
    const navigator = useNavigate()
    const param = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await axios.get(`http://localhost:8080/books/${param.id}`)
            setBook(result);
        }
        fetchApi()
    },[param.id])
    if(!book){
        return null
    }
    return (
        <>
            <Formik initialValues={
                {
                    title:  book?.title,
                    quantity:  book?.quantity
                }
            } onSubmit={(values) => {
                const update = async () => {
                    await axios.put(`http://localhost:8080/books/${param.id}`, values)
                    navigator("/")
                }
                update()
            }
            }>
                {
                    <Form>
                        <h1>Add a new Book</h1>
                        <div>
                            <label>Title</label>
                            <Field className="form-control" name='title'/>
                            <ErrorMessage name='title' component='span' className='form-err'/>
                        </div>
                        <div>
                            <label>Quantity</label>
                            <Field className="form-control" name='quantity'/>
                            <ErrorMessage className='form-err' component='span' name='quantity'/>
                        </div>
                        <button className="btn btn-success">Update</button>
                    </Form>
                }
            </Formik>


        </>
    )


}