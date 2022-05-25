import React, { Component } from "react";
import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";

class NewPost extends Component{
    render() {
        return(
            <div>
                <TopPanel />
                <div className="admin-page">
                    <LeftPanel />
                    <div className="content">
                        <textarea cols="30" rows="10"></textarea>
                        <button className="parse-in">Parse!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost