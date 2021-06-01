import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";


//when using more than one reducers, combine them in a main/root reducer
const mainReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    //firebase: firebaseReducer,
    firestore: firestoreReducer // this helps us sync our firstore data with our state
});
export default mainReducer