import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectLists =(props)=>{
    //lets destructure
    const {projects} = props
    const projectList = projects.length ?(projects.map(project=>{
        return(
            <ProjectSummary project={project} key={project.id}/>
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