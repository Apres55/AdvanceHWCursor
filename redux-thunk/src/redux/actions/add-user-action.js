import { addActions } from '../types';
import nlp from 'compromise';  
import { USERS } from '../reducers/addUserReducer';

export const addUser = (USERS) => {
        return {
            type: addActions.ADD_USER,
            payload: USERS,
    }
}

export default function exactUsersCollector () {
    return (dispatch, getState) => {
        const user = getState().addUserReducer
        const users = nlp(user)
        dispatch(exactUsersCollector(users.json(0).terms))
    }
}