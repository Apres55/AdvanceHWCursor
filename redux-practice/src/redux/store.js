import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import addTextReducer from './reducers/add-text-reducer';
import textParseReduser from './reducers/text-parse-reducer';
import saveWordsReducer from './reducers/save-words-reducer'

const reducer = combineReducers({
    addTextReducer,
    textParseReduser,
    saveWordsReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;