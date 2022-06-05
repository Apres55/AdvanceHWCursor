import { TEXT_PARSER } from '../types' 

const textParseReduser = (state = [], action) => {
    switch (action.type) {
        case TEXT_PARSER: 
            return action.payload;
        default:
                return state;
    }
}

export default textParseReduser;