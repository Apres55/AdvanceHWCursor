import { ADD_TEXT } from '../types'

const addTextReducer = (state = "", action) => {
    switch (action.type) {
        case ADD_TEXT: 
            return action.payload;
        default:
            return state;
    }
}

export default addTextReducer;