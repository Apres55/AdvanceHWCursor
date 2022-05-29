import React, { Component } from "react";
import TopBar from "../bar/TopBar"

class NewPost extends Component {
    render() {
        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        <input type="text" size="40" />
                        <textarea cols='30' rows='10'></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost;