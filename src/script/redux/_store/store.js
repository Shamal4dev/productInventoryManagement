import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import  rootReducer  from '../_reducers/reducers';

let middleWares = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger();
    middleWares = [...middleWares, loggerMiddleware]
}

export const store = createStore(
    rootReducer,
    applyMiddleware(
        ...middleWares
    )
);