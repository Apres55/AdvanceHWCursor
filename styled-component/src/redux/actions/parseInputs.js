import { addActions } from "../types";
import nlp from 'compromise';   

const inputEmail = (email) => {
    return {
        type: addActions.EMAIL_PARSER,
        payload: email,
    }
}

const inputPassword = (password) => {
    return {
        type: addActions.PASSWORD_PARSER,
        payload: password,
    }
}

const inputCollector = ({
    inputEmail,
    inputPassword
})

export default function exactInputsCollector () {
    return (dispatch, getState) => {
        const email = getState().addEmailReducer
        const mail = nlp(email)
        const password = getState().addPasswordReducer
        const pass = nlp(password)
        dispatch(inputCollector(mail.json(0).terms, pass.json(0).terms))
    }
}
