import React from "react";
import ProjectSummary from "./ProjectSummary";
import {Link} from "react-router-dom";

const ProjectLists =(props)=>{
    //lets destructure
    const {projects} = props
    const projectList = projects.length ?(projects.map(project=>{
        return(
            <Link to={'/project/'+ project.id}>
                <ProjectSummary project={project} key={project.id}/>
            </Link>
        )
    })) : (
        <div className="center">No available posts...</div>
    )
    return(
        <div className="project-list section">
            {projectList}
        </div>
    )

}


export default ProjectLists