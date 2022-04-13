import React from "react";
import '../App.css'
import picture from '../message-pict.jpg';
import logo from '../icon.jpg';
import Stats from './stats';

const userData = {
    persone: "Kevin Durant",
    image: logo,
    link: "@talkfordura"
};

let day = new Date();
const postData = {
    content: "HAHA Let's go Westbrik",
    image: picture,
    date: `${day.getDate()}/${day.getUTCMonth() + 1}`
};

const UserInfo = ({ persone, image, link }) => {
    return(
        <div className="userbar">
            <img className="App-logo" src={image=userData.image} alt="user" />
            <div>
                <b><a className="user-name" href="#">{persone=userData.persone}</a></b>
                <a className="linkStyle" href="#">{link=userData.link}</a>
                <span className="dateStr">{postData.date}</span>
                <p className='textArea'>{postData.content}</p>
            <p>
                <img src={postData.image} className="message-pict" alt="logo" />
            </p>
            <Stats />
            </div>
        </div>
    )
}

export default UserInfo