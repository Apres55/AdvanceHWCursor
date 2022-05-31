import React from "react";
import TopBar from "../bar/TopBar";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";

function UsersList() {
    const users = useSelector((state) => state.addUserReducer.users);
        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        {users.map((user, index) => (
                            <UserItem key={index} {...user} />
                        ))}
                    </div>
                </div>
            </div>
        )
}

export default UsersList;
