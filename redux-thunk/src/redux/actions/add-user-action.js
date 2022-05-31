import { addActions } from '../types';

export const addUser = (user) => {
        return {
            type: addActions.ADD_USER,
            payload: user,
    }
}