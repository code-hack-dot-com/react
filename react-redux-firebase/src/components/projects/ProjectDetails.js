import React from 'react';
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

const ProjectDetails = (props) => {
    const {project} =props;
    if (project){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>{project.authorFirstName} {project.authorLastName}</div>
                        <div>Posted on Sept</div>
                    </div>
                </div>
            </div>
        )

    }else{
        return (
            <div className="container center">
                <p>Loading project details...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;//this is available cos of the syncing of firestore reducer done in the mainreducer file and we added it to HOC below
    const project = projects? projects[id]: null;
    return {
        project: project
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}

    ])
)(ProjectDetails)