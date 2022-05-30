import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import addPostReducer from './reducers/addPostReducer';
import addUserReducer from './reducers/addUserReducer'

export const reducer = combineReducers ({
    addPostReducer,
    addUserReducer
})

const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;