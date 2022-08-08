import { SAVE_WORDS } from "../types";

const save = words => {
    return {
        type: SAVE_WORDS,
        payload: localStorage.setItem('words', JSON.stringify(words))
    }
}

export default function saveWordsAction() {
    return(dispatch, getState) => {
        const words = getState().textParseReduser
        dispatch(save(words));
    }
}