import React, {Component} from "react";
import Notifications from "./Notifications";
import ProjectLists from "../projects/ProjectLists";

class Dashboard extends Component{
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    {/*this means have 12 cols on small screens and 6 cols on mid screens*/}
                    <div className="col s12 m6">
                        <ProjectLists/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard