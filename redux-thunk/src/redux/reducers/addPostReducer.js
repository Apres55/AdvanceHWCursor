import { addActions } from '../types';

export const POSTS = [
    {
        avatar: 'https://i.pinimg.com/280x280_RS/13/b3/b6/13b3b6e44fbd9fb4f27c4068beb441a3.jpg',
        name: "Anderson Silva",
        username: "@nightmare33",
        text: "Example twit"
    }
];

const initialState = {
    posts: POSTS,
};

const addPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case addActions.ADD_POST: 
            return {
                posts: [action.payload, ...state.posts]
            }
        default:
            return state;
    }
}

export default addPostReducer;