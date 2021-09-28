import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './'

const initalState = {};
const middleware = [thunk];

const store = createStore(initalState, applyMiddleware(...middleware));

export default store;