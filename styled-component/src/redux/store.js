import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import addEmailReducer from './reducers/addEmailReducer';
import addLastNameReducer from './reducers/addLastNameReducer';
import addPasswordReducer from './reducers/addPasswordReducer';
import addNameReducer from './reducers/addNameReducer';


const reducer = combineReducers ({
    addNameReducer,
    addLastNameReducer,
    addEmailReducer,
    addPasswordReducer,
})

const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;