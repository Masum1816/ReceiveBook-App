import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import ReceipeReducer from "./Services/Reducer/ReceipeReducer";


export const store = createStore(ReceipeReducer, applyMiddleware(thunk))




