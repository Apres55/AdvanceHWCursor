import { addActions } from "../types";
import nlp from 'compromise';   

const mailCollector = (text) => {
    return {
        type: addActions.EMAIL_PARSER,
        payload: text,
    }
}

export default function exactMailCollector () {
    return (dispatch, getState) => {
        const text = getState().addEmailReducer
        const doc = nlp(text)
        dispatch(mailCollector(doc.json(0).terms))
    }
}

// 222222222222

const passwordCollector = (text) => {
    return {
        type: addActions.PASSWORD_PARSER,
        payload: text,
    }
}

export default function exactPasswordCollector () {
    return (dispatch, getState) => {
        const text = getState().addPasswordReducer
        const doc = nlp(text)
        dispatch(passwordCollector(doc.json(0).terms))
    }
}