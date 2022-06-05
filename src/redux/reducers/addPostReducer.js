import { addActions } from '../types'

const addPostReducer = (state = "", action) => {
    switch (action.type) {
        case addActions.ADD_POST: 
            return action.payload;
        default:
            return state;
    }
}

export default addPostReducer;