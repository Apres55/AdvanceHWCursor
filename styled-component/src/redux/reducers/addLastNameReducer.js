import { addActions } from '../types';

const addLastNameReducer = (state = '', action) => {
    switch (action.type) {
        case addActions.ADD_LAST_NAME: 
            return action.payload;
        default:
            return state;
    }
}

export default addLastNameReducer;