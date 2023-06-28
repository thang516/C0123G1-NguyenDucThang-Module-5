import userService from "../../component/service/UserService";
import {GET_ALL_USER, DELETE_BY_ID} from "./Types"

export const getAllUser = () => async (dispatch) => {
    try {
        const res = await userService.findAll();
        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }

}
export const deleteById = (id) => async (dispatch) => {
    try {
        const res = await userService.deleteById(id);
        dispatch({
            type: DELETE_BY_ID,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }

}
