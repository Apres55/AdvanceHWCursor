import { addActions } from '../types';

const addNameReducer = (state = '', action) => {
    switch (action.type) {
        case addActions.ADD_NAME: 
            return action.payload;
        default:
            return state;
    }
}

export default addNameReducer;