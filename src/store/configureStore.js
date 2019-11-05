/* eslint-disable prettier/prettier */
import {createStore, combineReducers} from 'redux';
import mainReducer from './reducers/mainReducer';

const rootReducer = combineReducers({
    mainReducer: mainReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
