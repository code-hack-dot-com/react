import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid at blanditiis culpa cupiditate ea eligendi, est ex, exercitationem in ipsam minima molestiae numquam, perferendis perspiciatis ratione sequi sit suscipit.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by me</div>
                    <div>Posted on Sept</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;