import { addActions } from '../types';

const addEmailReducer = (state = '', action) => {
    switch (action.type) {
        case addActions.ADD_EMAIL: 
            return action.payload;
        default:
            return state;
    }
}

export default addEmailReducer;