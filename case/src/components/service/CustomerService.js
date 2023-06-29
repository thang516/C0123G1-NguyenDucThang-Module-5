import axios, {get} from "axios";

export const getAll = async () => {
    try {
        const result= await axios.get('http://localhost:8080/customer')
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const getAllTypeCustomer =async ()=>{
    try {
        const res =await axios.get('http://localhost:8080/typeCustomer')
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export const save =async (customer)=>{
    try {
        const res = await  axios.post('http://localhost:8080/customer',customer)
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export const deleteCustomer = async (id) => {
    try {
        await axios.delete('http://localhost:8080/customer/'+id)
    }catch (e) {
        console.log(e)
    }
}
export const findById =async (id)=>{
    try {
        const res =await axios.get('http://localhost:8080/customer/'+id)
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export  const updateCustomer = async (value) => {

    try {
        await axios.put('http://localhost:8080/customer/'+value.id, value)
    }catch (e) {
        console.log(e)
    }

}