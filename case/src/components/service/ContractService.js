import axios, {get} from "axios";

export const getAll = async () => {
    try {
        const result= await axios.get('http://localhost:8080/contract')
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findByDeposit= async (deposit) => {
    try {
        const result= await axios.get(`http://localhost:8080/contract?deposit=${deposit}`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const save =async (contract)=>{
    try {
        const res = await  axios.post('http://localhost:8080/contract',contract)
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export const deleteContract = async (id) => {
    try {
        await axios.delete('http://localhost:8080/contract/'+id)
    }catch (e) {
        console.log(e)
    }
}
export const findById =async (id)=>{
    try {
        const res =await axios.get('http://localhost:8080/contract/'+id)
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export  const updateContract = async (value) => {

    try {
        await axios.put('http://localhost:8080/contract/'+value.id, value)
    }catch (e) {
        console.log(e)
    }

}