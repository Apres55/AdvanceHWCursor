import React from "react";
import TopBar from "../bar/TopBar";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";

function Posts() {
    const posts = useSelector((state) => state.posts);
        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        <div className="posts-list">
                        {posts.map((post) => (
                            <PostItem key={post.name} {...post} />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Posts;