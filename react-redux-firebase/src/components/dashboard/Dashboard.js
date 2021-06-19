import React, {Component} from "react";
import Notifications from "./Notifications";
import ProjectLists from "../projects/ProjectLists";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import { Redirect } from 'react-router-dom';

class Dashboard extends Component{
    render() {
        //console.log(this.props);
        const {projects,auth} = this.props;
        // the dashboard content should only show if the user is logged in so lets do an if check
        if (auth.uid){return(
            <div className="dashboard container">
                <div className="row">
                    {/*this means have 12 cols on small screens and 6 cols on mid screens*/}
                    <div className="col s12 m6">
                        <ProjectLists projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )}
        else{
            //create sleep function here so this doesnt do immediately
            return <Redirect to='/signin' />
        }

    }
}
//lets map our state from the store to the props of this components
const mapStateToProps=(state)=>{
    return{
       /*
       BEFORE FIRESTORE, USING DUMMY DATA FROM THE REDUCER
       //the data below is gotten from the store (i.e mainreducer>project reducer) then passed to the 'projects' property
        //'projects' can now be used as props in this component
        projects: state.project.projects //the first project refers to the project property in the main reducer the the second refers to the on in projectreducer
   */
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}
//pass the functions to connect so connect function knows what to get from the store
//firestore connect makes use of the 'firestore: firestoreReducer' set in main reducer and takes in the projects collection. Meaning, if this component is active, the firestore reducer automatically syncs the component state with the db data
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects',orderBy:['createdAt', 'desc'] }
    ])
)(Dashboard)
