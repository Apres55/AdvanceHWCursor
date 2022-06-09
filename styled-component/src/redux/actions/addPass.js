import { addActions } from '../types';

export const addPassword = (password) => ({
    type: addActions.ADD_PASSWORD,
    payload: password,
})