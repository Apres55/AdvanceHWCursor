import { addActions } from '../types';

const addPasswordReducer = (state = '', action) => {
    switch (action.type) {
        case addActions.ADD_PASSWORD: 
            return action.payload;
        default:
            return state;
    }
}

export default addPasswordReducer;