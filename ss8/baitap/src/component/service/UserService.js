import request from "../../http-common"


const findAll = () => {
    return request.get('/users')
}
const deleteById = (id) => {
    return request.delete('/users/' + id)
}

const userService = {
    findAll,
    deleteById,
}
export default userService;