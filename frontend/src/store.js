import {createStore, combineReducers, applyMiddleware} from 'redux';
// We're going to have a bunch of reducers. And each reducer is going to have a bunch of functionality.

import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

// Reducers
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import {cartReducer} from "./reducers/cartReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;