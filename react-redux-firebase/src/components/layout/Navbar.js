import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";

const Navbar =  (props)=>{
    const {auth, profile} =props;
    const links = auth.uid ? <SignedInLinks profile ={profile}/>:<SignedOutLinks/>
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">PLANNER</Link>
                {/*ensures there isnt any flickering between the signin and signout link*/}
                {auth.isLoaded && links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state)=>{
    //uncomment the below to get details of everypage logged out in console
    //console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
}
export default connect(mapStateToProps)(Navbar)