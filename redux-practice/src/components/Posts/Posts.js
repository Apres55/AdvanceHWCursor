import React from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import TopPanel from "../TopPanel/TopPanel" 

function Posts() {
    return(
        <div>
            <TopPanel />
            <div className="admin-page">
                <LeftPanel />
                <div className="content">
                    <h1>Post</h1>
                </div>
            </div>
        </div>
    )
}

export default Posts;