import { addActions } from '../types';

export const addName = (name) => ({
    type: addActions.ADD_NAME,
    payload: name,
})