import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducers = combineReducers({requestRobots, searchRobots});
import { requestRobots, searchRobots } from './reducers'

export function initializeStore() {
    return createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))
}