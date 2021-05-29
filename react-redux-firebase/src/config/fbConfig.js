import firebase from "firebase/app";//firebase/app means import just the core functionallities of firebase and not the whole library
import 'firebase/firestore'
import 'firebase/auth'

/*lets initialize firebase*/
var firebaseConfig = {
    apiKey: "AIzaSyBb0NWJ5mpeUL67a2M1r6MoY4DDlHUTPlg",
    authDomain: "react-redux-planner-b0643.firebaseapp.com",
    projectId: "react-redux-planner-b0643",
    storageBucket: "react-redux-planner-b0643.appspot.com",
    messagingSenderId: "690467038236",
    appId: "1:690467038236:web:52effc647eef5904a7abd9",
    measurementId: "G-62M1P4R1TD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
