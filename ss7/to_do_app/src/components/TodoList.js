import React, {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";


export function TodoList() {

    const [todo, setTodo] = useState([])
    const fetchApi = async () => {
        try {
            const result = await axios.get('http://localhost:8080/todo')
            setTodo(result.data)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchApi();

    }, [])


    return (
        <>
            <h1>Todo List</h1>
            <Formik initialValues={{
                title: ""
            }} onSubmit={(values, {resetForm}) => {
                const create = async () => {
                    await axios.post('http://localhost:8080/todo', values)
                    fetchApi();
                    resetForm();
                }
                create();
            }
            }>
                <Form>
                    <Field type="text" name='title'/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>


            {
                todo.map((todoList) => (
                    <ul key={todoList.id}>
                        <li>{todoList.title}</li>
                    </ul>
                ))
            }

        </>
    )

}