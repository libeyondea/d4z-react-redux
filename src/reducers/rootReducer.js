import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './authReducer';
import { fetchPostReducer, createPostReducer, detailPostReducer } from './postReducer';

const rootReducer = combineReducers({
	log: loginReducer,
	reg: registerReducer,
	fetchPost: fetchPostReducer,
	createPost: createPostReducer,
	detailPost: detailPostReducer
});

export {rootReducer};