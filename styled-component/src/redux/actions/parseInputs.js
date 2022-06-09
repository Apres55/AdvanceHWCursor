import { addActions } from "../types";
import nlp from 'compromise';   

const mailCollector = (email) => {
    return {
        type: addActions.EMAIL_PARSER,
        payload: email,
    }
}

export default function exactMailCollector () {
    return (dispatch, getState) => {
        const email = getState().addEmailReducer
        const doc = nlp(email)
        dispatch(mailCollector(doc.json(0).terms))
    }
}
