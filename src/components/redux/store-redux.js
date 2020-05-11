import {createStore, combineReducers} from 'redux';
import dialogsReducer from './dialogs-reducer';
import postReducer from './posts-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    posts : postReducer,
    dialogs: dialogsReducer, 
    users: usersReducer,
});

let store = createStore(reducers);
export default store;