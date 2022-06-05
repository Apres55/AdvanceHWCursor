import { ADD_POST, SORT_POST } from './actions';
import { reverse } from '../components/PostList'; 

const POSTS = [
    {
    title: "post title 1",
    text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },
    {
    title: "post title 2",
    text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
    title: "post title 3",
    text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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