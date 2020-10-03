import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import tagReducer from './tagReducer';
import categoryReducer from './categoryReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	posts: postReducer,
	tags: tagReducer,
	categories: categoryReducer,
	comments: commentReducer
});

export default rootReducer;
