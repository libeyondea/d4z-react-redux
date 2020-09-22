import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const inititalState = {};

const composeEnhancers =
	typeof window === 'object' &&
	process.env.NODE_ENV === 'development' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
const store = createStore(rootReducer, inititalState, composeEnhancers(applyMiddleware(thunk)));

export default store;
