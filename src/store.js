import { combineReducers, configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import appReducer from './reducer/appReducer';
import userReducer from './reducer/userReducer';
import tagReducer from './reducer/tagReducer';
import journalReducer from './reducer/journalReducer';

const middleware = [thunk];

const reducer = combineReducers({
    app: appReducer,
    user: userReducer,
    tag: tagReducer,
    journal: journalReducer
    
});

const store = configureStore({
    reducer, middleware
});

export default store;
