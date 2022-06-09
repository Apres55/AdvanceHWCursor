import { addActions } from "../types";
import nlp from 'compromise';   

const passwordCollector = (password) => {
    return {
        type: addActions.PASSWORD_PARSER,
        payload: password,
    }
}

export default function exactPasswordCollector () {
    return (dispatch, getState) => {
        const password = getState().addPasswordReducer
        const doc = nlp(password)
        dispatch(passwordCollector(doc.json(0).terms))
    }
}