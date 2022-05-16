import { ADD_POST, SORT_POST } from './actions';
import { reverse } from '../components/PostList';

let day = new Date();
const DATE = `${day.getDate()}/${day.getUTCMonth() + 1}`;

const POSTS = [
    {
    userData: {
        title: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
    },
    textHolder: {
        text:
        "Lorem ipsum dolor sit amet,"
        }
    },
    {
    userData: {
        title: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
    },
    textHolder: {
        text:
        "Lorem ipsumut laboremmodo consequatvelit esse cillum dolore eu fugiat nulla pariatur."
        }
    },
    {
        userData: {
            title: "Kevin Durant",
            link: "@notkevinnow",
            date: DATE,
        },
    textHolder: {
        text:
        "Lorem Duis aute irure dolor in reprehenderit in voluptate velitfugiat nulla pariatur."
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