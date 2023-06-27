import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate,NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



export function Book() {
        const [book,setBook] = useState([])
    const [idDelete,setIdDelete] = useState();
    const [titleDelete,setTitleDelete] = useState();

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

    function handleDelete(id, title) {
            setIdDelete (id) ;
            setTitleDelete(title);
    }

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

                        <button >
                       <NavLink to={'/update/'+books.id}>Update</NavLink>
                        </button>
                        <button type="button" className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>handleDelete(books.id,books.title)} >Delete</button>
                    </td>

                </tr>

            ))
            }

            </tbody>



            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Notification</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc xóa  <span style={{color : "red"}}>{titleDelete}</span> <span>không ?</span>
                            <p hidden id={idDelete}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>



        </table>
        </>
    )


}