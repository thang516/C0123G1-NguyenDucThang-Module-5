import axios from "axios";

export const getAllBill = async () => {
    try{
       const  res = await axios.get("http://localhost:8080/api/bill")
        return  res.data
    }catch (e) {
        console.log(e)
    }

}
export const deleteById = async (id) => {
    try{
       await axios.delete("http://localhost:8080/api/bill/"+id)

    }catch (e) {
        console.log(e)
    }

}
export const getAllProduct = async () => {
    try{
        const res = await axios.get("http://localhost:8080/api/product")
        return  res.data
    }catch (e) {
        console.log(e)
    }

}
export const save = async (bill) => {
    try{
        await axios.post("http://localhost:8080/api/bill/create",bill)
    }catch (e) {
        console.log(e)
    }

}
export const search = async (date,productId) => {
    try{
       const res =  await axios.get("http://localhost:8080/bill?productId_like="+productId+ "&date_like="+(date))
        return res.data

    }catch (e) {
        console.log(e)
    }

}