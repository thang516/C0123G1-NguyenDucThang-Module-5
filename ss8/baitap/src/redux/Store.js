import thunk  from "redux-thunk";
import {rootReducer} from "./reducer";
import {applyMiddleware, createStore} from "redux";

const initialStore = {}
const middleWare=[thunk];
const store  =createStore(
    rootReducer,
    initialStore,
    applyMiddleware(...middleWare)
)
export default store;