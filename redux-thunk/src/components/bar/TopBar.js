import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css'

class TopBar extends Component {
    render() {
        return(
            <div className="top-panel">
                    <Link to="/">Add User</Link>
                    <Link to="/users">Users List</Link>
                    <Link to="/newpost">New Post</Link>
                    <Link to="/posts">Posts</Link>
            </div>
        )
    }
} 

export default TopBar;