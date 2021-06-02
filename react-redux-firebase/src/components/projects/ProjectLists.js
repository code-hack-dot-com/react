import React from "react";
import ProjectSummary from "./ProjectSummary";
import {Link} from "react-router-dom";

const ProjectLists =(props)=>{
    //lets destructure
    const {projects} = props
    const projectList = projects.length ?(projects.map(project=>{
        return(
            //note that the key value should always be associated with the parent element: in this case Link component not ProjectSummaey
            <Link to={'/project/'+ project.id} key={project.id}>
                <ProjectSummary project={project}/>
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