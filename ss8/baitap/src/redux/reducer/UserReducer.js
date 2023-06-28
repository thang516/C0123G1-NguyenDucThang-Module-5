import {DELETE_BY_ID, GET_ALL_USER} from "../action/Types";


let initialState = [];
const userReducer = (users = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case GET_ALL_USER :
            return payload
        case DELETE_BY_ID :
            return users
        default :
            return users
    }

}
export default userReducer;