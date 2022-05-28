import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBar extends Component {
    render() {
        return(
            <div className="top-panel">
                <Link to="/users">Users</Link>
                <Link to="/add-user">Add User</Link>
                <Link to="/posts">Posts List</Link>
                <Link to="/new-post">Create Post</Link>
            </div>
        )
    }
} 

export default TopBar;