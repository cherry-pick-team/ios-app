"use strict";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {routerMiddleware} from '../utils/RouterMiddleware';


export const configureStore = (initialState) => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			sagaMiddleware,
			routerMiddleware,
			logger
		)
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
