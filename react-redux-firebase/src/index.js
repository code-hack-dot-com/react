import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware, compose} from "redux";
import mainReducer from "./store/reducers/mainReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import {createFirestoreInstance, getFirestore, reduxFirestore} from "redux-firestore";
import firebase from "firebase/app";

//we import think and applemiddleware so we can use it as middleware in the action creators
//thunk middlware enhances the store with extra functionality. it allows us to return a function in the action creators so we can interact with db
//compose allows us use multiple store enhancers, so here we use thunk,reduxFirestore and reactReduxFirebase
const store = createStore(mainReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase,fbConfig),
        //reactReduxFirebase(fbConfig)


        )

    )
const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
 }
ReactDOM.render(

  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
