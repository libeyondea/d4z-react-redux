import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './authReducer';
import {
	fetchPostReducer,
	createPostReducer,
	singlePostReducer,
	editPostReducer,
	updatePostReducer,
	deletePostReducer
} from './postReducer';
import { fetchTagReducer } from './tagReducer';
import { fetchCategoryReducer } from './categoryReducer';
import { fetchCommentReducer, createCommentReducer } from './commentReducer';

const rootReducer = combineReducers({
	log: loginReducer,
	reg: registerReducer,
	fetchPost: fetchPostReducer,
	createPost: createPostReducer,
	singlePost: singlePostReducer,
	editPost: editPostReducer,
	updatePost: updatePostReducer,
	deletePost: deletePostReducer,
	fetchTag: fetchTagReducer,
	fetchCategory: fetchCategoryReducer,
	fetchComment: fetchCommentReducer,
	createComment: createCommentReducer
});

export default rootReducer;
