import React, {Component} from 'react';
import { createProject } from '../../store/actions/projectActions'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


class CreateProject extends Component {
    state ={
        title:'',
        content:'',
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
        //lets redirect after submit
        this.props.history.push('/');
    }
    render() {
        const {auth} =this.props;

        return (
            auth.uid?
                 ( <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>): <Redirect to='/signin'/>
        );
    }
}
//lets send data to the store/action creator so we can update the store!
const mapDispatchToProps =(dispatch)=>{
    return{
        //so from our component we say props.createproject and pass in the project details we wanna create,
        //it dispatches and calls the 'createproject' action creator which was imported at the top and sending the project to it
        //then db details happens in the action creator, before it continues with dispatch
        createProject:(project)=>dispatch(createProject(project))
    }
}
//lets create mapStateToProps function so we can use it to retrieve if the user is logged in and then protect the visibility of some data
const mapStateToProps= (state)=>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);