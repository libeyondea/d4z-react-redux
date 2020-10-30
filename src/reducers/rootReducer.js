import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import postReducer from './postReducer';
import tagReducer from './tagReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	users: userReducer,
	posts: postReducer,
	tags: tagReducer,
	categories: categoryReducer
});

export default rootReducer;
