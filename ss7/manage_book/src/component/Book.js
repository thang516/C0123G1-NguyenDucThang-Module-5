import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";



export function Book() {
        const [book,setBook] = useState([])
    const navigate = useNavigate();
        useEffect(()=>{
            const fetchApi = async () =>{
                try{
                    const result = await  axios.get('http://localhost:8080/books')
                    setBook(result.data)
                }catch (e) {
                    console.log(e);
                }
            }
            fetchApi();

        },[])
    return(
        <>
        <h1 style={{textAlign : "center"}}>BookList</h1>
            <button type='submit' onClick={()=> navigate('/create')}  className='btn btn-success '>Add a new Book</button>
        <table className='table table-striped'>
            <thead>
            <tr>
                <th>Title</th>
                <th>Quantity</th>
                <th>Function</th>
            </tr>
            </thead>
            <tbody>
            {
            book.map((books) =>(
                <tr key={books.id}>
                    <td>{books.title}</td>
                    <td>{books.quantity}</td>
                    <td>
                        <button className='btn btn-primary'>Edit</button>
                        <button className='btn btn-danger'>Delete</button>
                    </td>

                </tr>

            ))
            }

            </tbody>
        </table>
        </>
    )


}