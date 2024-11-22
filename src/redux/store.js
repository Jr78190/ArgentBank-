import { configureStore,  combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer'; 

const rootReducer = combineReducers({
    auth: authReducer, 
    user: userReducer, 
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
