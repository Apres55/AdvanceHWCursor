import { ADD_POST, SORT_POST } from './actions';
import { reverse } from '../components/PostList';
import '../pict/dur.jpg'
import '../pict/west.jpg'

const avatar = <div className='divAvatar' />
const postPict = <div className='post-picture' />

let day = new Date();
const DATE = `${day.getDate()}/${day.getUTCMonth() + 1}`;

const POSTS = [
    {
    userData: {
        imgFile: avatar,
        title: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
    },
    textHolder: {
        text: "WTF?! Where is my Westbrik bro? xD",
        postImg: postPict,
        }
    },
    {
    userData: {
        imgFile: avatar,
        title: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
    },
    textHolder: {
        text: "Ok it's not funny -> we can't lost it",
        }
    },
    {
        userData: {
            imgFile: avatar,
            title: "Kevin Durant",
            link: "@notkevinnow",
            date: DATE,
        },
    textHolder: {
        text: "Listen to me - BRON can comeback 3-1 and i grow up for 3-0",
        }
    }
];

const initialState = {
    posts: POSTS,
    direction: 'desc',
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
        const posts = state.direction === 'desc'
            ? [...state.posts, action.payload] 
            : [action.payload, ...state.posts];
            return {
                ...state,
                posts,
            }
        case SORT_POST:
            return {
                ...state,
                posts: reverse(state.posts),
                direction: state.direction === "desc" ? "asc" : "desc",            }
        default:
            return state;
    }
};