import React from 'react';
import UserInfo from './userInfo';
import '../App.css';

const Post = () => {
    return (
    <div className="App">
        <header className="App-header">
            <UserInfo persone image link date />
        </header>
    </div>);
}

export default Post;