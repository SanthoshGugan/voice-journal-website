import { combineReducers, configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import userReducer from './reducer/userReducer';

const middleware = [thunk];

const reducer = combineReducers({
    userReducer,
});

const store = configureStore({
    reducer, middleware
});

export default store;
