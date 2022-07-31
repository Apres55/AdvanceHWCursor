import { addActions } from "../types";

const infoParserReducer = (state = [], action) => {
    switch (action.type) {
        case addActions.INFO_PARSER: 
            return action.payload
    }
    return state;
}

export default infoParserReducer;