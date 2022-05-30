import { addActions } from '../types';

export const addPost = (user) => ({
    type: addActions.ADD_USER,
    payload: user,
})