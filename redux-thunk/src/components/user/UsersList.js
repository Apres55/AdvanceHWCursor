import React from "react";
import TopBar from "../bar/TopBar"

function UsersList() {
        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        <h1>Users</h1>
                    </div>
                </div>
            </div>
        )
}

export default UsersList;
