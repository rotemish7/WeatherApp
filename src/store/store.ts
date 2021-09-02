import { combineReducers, createStore } from 'redux';
import { weatherReducer } from './reducers/weatherReducers';

const rootReducer = combineReducers(weatherReducer);

export const store = createStore(rootReducer);
