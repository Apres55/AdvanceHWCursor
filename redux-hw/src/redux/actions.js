export const ADD_POST = 'ADD+POST';
export const SORT_POST = 'SORT_POST';

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
})
