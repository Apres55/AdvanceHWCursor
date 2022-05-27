import { ADD_TEXT } from "../types";

export const addTextAction = (text) => {
    return {
        type: ADD_TEXT,
        payload: text,
    }
}