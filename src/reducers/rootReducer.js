import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './authReducer';
import {
	fetchPostReducer,
	createPostReducer,
	detailPostReducer,
	editPostReducer,
	updatePostReducer,
	deletePostReducer
} from './postReducer';

const rootReducer = combineReducers({
	log: loginReducer,
	reg: registerReducer,
	fetchPost: fetchPostReducer,
	createPost: createPostReducer,
	detailPost: detailPostReducer,
	editPost: editPostReducer,
	updatePost: updatePostReducer,
	deletePost: deletePostReducer
});

export {rootReducer};