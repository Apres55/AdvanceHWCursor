import { addActions } from '../types';

export const addLastName = (lastName) => ({
    type: addActions.ADD_LAST_NAME,
    payload: lastName,
})