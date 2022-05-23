import { ADD_POST } from './actions';
import west from "../pict/west.jpg"

const avatar = <div className='divAvatar' />

let day = new Date();
const DATE = `${day.getDate()}/${day.getUTCMonth() + 1}`;

const POSTS = [
    {
        imgFile: avatar,
        title: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
        text: "WTF?! Where is my Westbrik bro? xD",
        image: west
    },
    {
        imgFile: avatar,
        title: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
        text: "Ok it's not funny -> we can't lost it",
    },
    {
        imgFile: avatar,
        title: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
        text: "Listen to me - BRON can comeback 3-1 and i grow up for 3-0",
    }
];

const initialState = {
    posts: POSTS,
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            return {
                posts: [action.payload, ...state.posts]
            }
            default:
                return state;
    }
};