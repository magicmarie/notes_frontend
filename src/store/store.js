import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from "../reducers/rootReducer";
import  { composeWithDevTools } from 'redux-devtools-extension';

import initialState from "../reducers/initialState"

const middleware = [thunk, promise];

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
