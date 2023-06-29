import axios, {get} from "axios";

export const getAll = async () => {
    try {
        const result= await axios.get('http://localhost:8080/services')
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const getAllType=async ()=>{
    try {
        const res =await axios.get('http://localhost:8080/typeService')
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export const save =async (service)=>{
    try {
        const res = await  axios.post('http://localhost:8080/services',service)
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export const deleteService = async (id) => {
    try {
        await axios.delete('http://localhost:8080/services/'+id)
    }catch (e) {
        console.log(e)
    }
}
export const findById =async (id)=>{
    try {
        const res =await axios.get('http://localhost:8080/services/'+id)
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export  const updateService = async (value) => {

    try {
        await axios.put('http://localhost:8080/services/'+value.id, value)
    }catch (e) {
        console.log(e)
    }

}