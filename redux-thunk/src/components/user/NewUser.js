import React, { Component } from "react";
import TopBar from "../bar/TopBar"

class NewUser extends Component {
    render() {
        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        <form className="new-user-form">
                            <input
                                type="text"
                                placeholder="Title"
                                value='text'
                            />
                            <input
                                type="text"
                                placeholder="Title"
                                value='text'
                            />
                            <button type="submit">
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewUser;