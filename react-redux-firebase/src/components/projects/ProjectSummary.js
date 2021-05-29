import React from "react";

const ProjectSummary = (props)=>{
    const project = props.project;
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by</p>
                <p className='grey-text'>Dated posted</p>
            </div>
        </div>
    )
}

export default ProjectSummary