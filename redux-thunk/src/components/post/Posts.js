import React from "react";
import TopBar from "../bar/TopBar";
import { useSelector } from "react-redux";
import PostItem from "./PostItem"; 

function Posts() {
    const posts = useSelector((state) => state.addPostReducer.posts);
        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        {posts.map((post, index) => (
                            <PostItem key={index} {...post} />
                        ))}
                    </div>
                </div>
            </div>
        )
}

export default Posts;