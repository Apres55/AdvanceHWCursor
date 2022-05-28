import { createStore, applyMiddleware, combineReducers } from 'redux';
import addUserReducer from './reducers/addUserReducer';
import addPostReducer from './reducers/addPostReducer';

const reducer = combineReducers({
    addPostReducer,
    addUserReducer,
})

const store = createStore(
    reducer,
);

export default store;