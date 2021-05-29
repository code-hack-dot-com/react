import React, {Component} from "react";
import Notifications from "./Notifications";
import ProjectLists from "../projects/ProjectLists";
import {connect} from "react-redux";

class Dashboard extends Component{
    render() {
        console.log(this.props);
        const {projects} = this.props;
        return(
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
        )
    }
}
//lets map our state from the store to the props of this components
const mapStateToProps=(state)=>{
    return{
        //the data below is gotten from the store (i.e mainreducer>project reducer) then passed to the 'projects' property
        //'projects' can now be used as props in this component
        projects: state.project.projects //the first project refers to the project property in the main reducer the the second refers to the on in projectreducer
    }
}
//pass the functions to connect so connect function knows what dat to get from the store
export default connect(mapStateToProps)(Dashboard)