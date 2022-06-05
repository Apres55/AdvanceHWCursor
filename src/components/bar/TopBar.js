import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBar extends Component {
    render() {
        return(
            <div className="top-panel">
                <ul>
                    <li><Link to="/">NewUser</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/newpost">NewPost</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </div>
        )
    }
} 

export default TopBar;