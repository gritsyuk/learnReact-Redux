import {createStore, combineReducers} from 'redux';
import dialogsReducer from './dialogs-reducer';
import postReducer from './posts-reducer';

let reducers = combineReducers({
    posts : postReducer,
    dialogs: dialogsReducer 
});

let store = createStore(reducers);
export default store;