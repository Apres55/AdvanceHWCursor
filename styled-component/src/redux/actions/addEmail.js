import { addActions } from '../types';

export const addEmail = (email) => {
    return {
        type: addActions.ADD_EMAIL,
        payload: email,
    }
}