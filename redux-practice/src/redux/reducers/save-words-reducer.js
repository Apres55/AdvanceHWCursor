import { SAVE_WORDS } from '../types'

const saveWordsReducer = (state, action) => {
    switch (action.type) {
        case SAVE_WORDS: 
            return action.payload;
        default:
            return state;
    }
}

export default saveWordsReducer;