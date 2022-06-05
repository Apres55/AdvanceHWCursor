import React, { Component } from "react";
import TopBar from "../bar/TopBar"

class NewUser extends Component {
    render() {
        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        <input type="text" size="40" />
                        <button className="new-user-btn">ADD</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewUser;