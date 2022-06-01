import { addActions } from '../types';

export const USERS = [
    {
        avatar: 'https://i.pinimg.com/280x280_RS/13/b3/b6/13b3b6e44fbd9fb4f27c4068beb441a3.jpg',
        name: "Anderson Silva",
        username: "@nightmare33",
    }
]

const initialState = {
    users: USERS, 
};

const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case addActions.ADD_USER: 
            return {
                users: [action.payload, ...state.users]
            }
        default:
            return state;
    }
}

export default addUserReducer;