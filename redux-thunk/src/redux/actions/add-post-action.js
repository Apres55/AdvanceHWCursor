import { addActions } from '../types';

export const addPost = (post) => ({
    type: addActions.ADD_POST,
    payload: post,
})