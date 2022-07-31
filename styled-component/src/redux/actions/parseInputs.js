import { addActions } from "../types";
import nlp from 'compromise';   

const infoCollection = (words) => {
    return {
        type: addActions.INFO_PARSER,
        payload: words
    }
}

export default function exactInfoCollector () {
    return (dispatch, getState) => {
        const name = getState().addNameReducer;
        const docName = nlp(name);
        const lastName = getState().addlastNameReducer;
        const doclastName = nlp(lastName);
        const email = getState().addEmailReducer;
        const docEmail = nlp(email);
        const password = getState().addPasswordReducer;
        const docPass = nlp(password);
        dispatch(infoCollection(docName.json(0).terms, doclastName.json(0).terms, docEmail.json(0).terms, docPass.json(0).terms))
    }
}
