import React from "react";
import TopBar from "../bar/TopBar"

const NewUser = () => {
    return(
        <div>
            <TopBar />
            <div className="admin-page">
                <div className="content">
                    <h1>User</h1>
                </div>
            </div>
        </div>
    )
}

export default NewUser;