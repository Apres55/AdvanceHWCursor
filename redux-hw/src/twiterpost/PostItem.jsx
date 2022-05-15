import React from 'react';
import UserInfo from './userInfo';
import '../App.css';

const PostItem = (props) => {
    const { persone, image, link, date } = props;

    return (
        <div className="post-item">
            <header className="App-header">
                <UserInfo persone={persone} image={image} link={link} date={date} />
            </header>
        </div>
    );
}

export default PostItem; 