import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import {signOut} from "../../store/actions/authActions";

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li>
                {/*lets use anchor tag below instead of navlink since we arent going to any link*/}
                <li><a onClick={props.signOut}>Logout</a></li>
                <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
            </ul>
        </div>

    )
}
//we can also just access the profile here instead of passing it down as a prop from Navbar
/*const mapStateToProps = (state) => {
    return{
        profile: state.firebase.profile,
    }
}*/
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)

