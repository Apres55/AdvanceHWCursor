import { addActions } from '../types'

const addUserReducer = (state = {}, action) => {
    switch (action.type) {
        case addActions.ADD_USER: 
            return action.payload;
        default:
            return state;
    }
}

export default addUserReducer;