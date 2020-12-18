import {createStore, combineReducers, applyMiddleware} from 'redux';
// We're going to have a bunch of reducers. And each reducer is going to have a bunch of functionality.

import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

// Reducers
import {productListReducer, productDetailsReducer} from './reducers/productReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;