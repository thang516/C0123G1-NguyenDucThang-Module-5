import {useEffect, useState} from "react";
import axios from "axios";
import {date} from "yup";


export function BookDelete() {
const [book,setBook] = useState();
useEffect(()=>{
    const fetchApi = async ()=>{
        try {
            const result = await  axios.delete("http://localhost:8080/books")
            setBook(result.data);
        }catch (e) {
            console.log(e);
        }
    }
    fetchApi()
},[])
    return(
        <>

        </>
    )
}