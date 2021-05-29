import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import {combineReducers} from "redux";


//when using more than one reducers, combine them in a main/root reducer
const mainReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});
export default mainReducer