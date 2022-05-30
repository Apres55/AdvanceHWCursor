import React, { Component } from "react";
import TopBar from "../bar/TopBar";

class NewPost extends Component {
    render() {
        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        <form className="new-post-form">
                            <input
                                type="text"
                                placeholder="Title"
                                value='text'
                            />
                            <textarea
                                placeholder="Text"
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

export default NewPost;