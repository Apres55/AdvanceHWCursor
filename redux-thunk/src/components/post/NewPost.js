import React, { useState } from "react";
import TopBar from "../bar/TopBar";
import { useDispatch } from 'react-redux';
import { addPost } from "../../redux/actions/add-post-action";
import { USERS } from "../../redux/reducers/addUserReducer";

function NewPost () {

    const [user, setUser] = useState("");
    const [text, setText] = useState("");
    const [avatar, setAvatar] = useState("");

    const dispatch = useDispatch();

    const onCreatePost = (event) => {
    event.preventDefault();
    const selectedUser = USERS.find((item) => item.name === user);
        dispatch(addPost({
            avatar: selectedUser.avatar,
            name: selectedUser.name,
            username: selectedUser.username,
            text
        }));
    setUser("");
    setText("");
    setAvatar("")
    };

        return(
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                        <form className="new-post-form" onSubmit={onCreatePost}>
                            <select className="create-post-select" onChange={(e) => setUser(e.target.value)}>
                                <option value='default' selected disabled>Select User</option>
                                {USERS.map((item, index) => (
                                    <option value={item.name} key={index}>{item.name}</option>
                                ))}
                            </select>
                            <textarea
                                placeholder="Text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
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


export default NewPost;