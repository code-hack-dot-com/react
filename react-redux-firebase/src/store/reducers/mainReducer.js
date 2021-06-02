import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";


//when using more than one reducers, combine them in a main/root reducer
const mainReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,//firebase reducer helps us sync our auth status and other firebase info in firebase with our redux app state
    firestore: firestoreReducer // this helps us sync our firestore data with our state
});
export default mainReducer