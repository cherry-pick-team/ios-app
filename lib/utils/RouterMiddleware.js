"use strict";
import {Actions} from 'react-native-router-flux'
import {ROUTER_PUSH, ROUTER_REPLACE, ROUTER_BACK} from '../actions/router';

export const routerMiddleware = store => next => action => {
	if (action.type === ROUTER_PUSH) {
		Actions[action.payload]({type: 'push'});
	}

	if (action.type === ROUTER_REPLACE) {
		Actions[action.payload]({type: 'replace'});
	}

	if (action.type === ROUTER_BACK) {
		Actions[action.payload]({type: 'back'});
	}

	return next(action);
};
