import {
	FETCH_POST_REQUESTED,
	FETCH_POST_SUCCEED,
	FETCH_POST_FAILED,
	FETCH_POST_RESETED,
	CREATE_POST_REQUESTED,
	CREATE_POST_SUCCEED,
	CREATE_POST_FAILED,
	CREATE_POST_RESETED,
	SINGLE_POST_REQUESTED,
	SINGLE_POST_SUCCEED,
	SINGLE_POST_FAILED,
	SINGLE_POST_RESETED,
	EDIT_POST_REQUESTED,
	EDIT_POST_SUCCEED,
	EDIT_POST_FAILED,
	EDIT_POST_RESETED,
	UPDATE_POST_REQUESTED,
	UPDATE_POST_SUCCEED,
	UPDATE_POST_FAILED,
	UPDATE_POST_RESETED,
	DELETE_POST_REQUESTED,
	DELETE_POST_SUCCEED,
	DELETE_POST_FAILED,
	DELETE_POST_RESETED
} from '../constants/postConstant';
import { produce } from 'immer';

const initialState = {
	fetchPost: {
		post: [],
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	createPost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	singlePost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	editPost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	updatePost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	deletePost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	}
};

const postReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			//
			case FETCH_POST_REQUESTED:
				draft.fetchPost.post = [];
				draft.fetchPost.isLoading = true;
				draft.fetchPost.isError = false;
				draft.fetchPost.errorMessage = null;
				break;
			case FETCH_POST_SUCCEED:
				draft.fetchPost.post = action.payload;
				draft.fetchPost.isLoading = false;
				draft.fetchPost.isError = false;
				draft.fetchPost.errorMessage = null;
				break;
			case FETCH_POST_FAILED:
				draft.fetchPost.post = [];
				draft.fetchPost.isLoading = false;
				draft.fetchPost.isError = true;
				draft.fetchPost.errorMessage = action.payload;
				break;
			case FETCH_POST_RESETED:
				draft.fetchPost.post = [];
				draft.fetchPost.isLoading = false;
				draft.fetchPost.isError = false;
				draft.fetchPost.errorMessage = null;
				break;
			//
			case CREATE_POST_REQUESTED:
				draft.createPost.post = {};
				draft.createPost.isLoading = true;
				draft.createPost.isError = false;
				draft.createPost.errorMessage = null;
				break;
			case CREATE_POST_SUCCEED:
				draft.createPost.post = action.payload;
				draft.createPost.isLoading = false;
				draft.createPost.isError = false;
				draft.createPost.errorMessage = null;
				break;
			case CREATE_POST_FAILED:
				draft.createPost.post = {};
				draft.createPost.isLoading = false;
				draft.createPost.isError = true;
				draft.createPost.errorMessage = action.payload;
				break;
			case CREATE_POST_RESETED:
				draft.createPost.post = {};
				draft.createPost.isLoading = false;
				draft.createPost.isError = false;
				draft.createPost.errorMessage = null;
				break;
			//
			case SINGLE_POST_REQUESTED:
				draft.singlePost.post = {};
				draft.singlePost.isLoading = true;
				draft.singlePost.isError = false;
				draft.singlePost.errorMessage = null;
				break;
			case SINGLE_POST_SUCCEED:
				draft.singlePost.post = action.payload;
				draft.singlePost.isLoading = false;
				draft.singlePost.isError = false;
				draft.singlePost.errorMessage = null;
				break;
			case SINGLE_POST_FAILED:
				draft.singlePost.post = {};
				draft.singlePost.isLoading = false;
				draft.singlePost.isError = true;
				draft.singlePost.errorMessage = action.payload;
				break;
			case SINGLE_POST_RESETED:
				draft.singlePost.post = {};
				draft.singlePost.isLoading = false;
				draft.singlePost.isError = false;
				draft.singlePost.errorMessage = null;
				break;
			//
			case EDIT_POST_REQUESTED:
				draft.editPost.post = {};
				draft.editPost.isLoading = true;
				draft.editPost.isError = false;
				draft.editPost.errorMessage = null;
				break;
			case EDIT_POST_SUCCEED:
				draft.editPost.post = action.payload;
				draft.editPost.isLoading = false;
				draft.editPost.isError = false;
				draft.editPost.errorMessage = null;
				break;
			case EDIT_POST_FAILED:
				draft.editPost.post = {};
				draft.editPost.isLoading = false;
				draft.editPost.isError = true;
				draft.editPost.errorMessage = action.payload;
				break;
			case EDIT_POST_RESETED:
				draft.editPost.post = {};
				draft.editPost.isLoading = false;
				draft.editPost.isError = false;
				draft.editPost.errorMessage = null;
				break;
			//
			case UPDATE_POST_REQUESTED:
				draft.updatePost.post = {};
				draft.updatePost.isLoading = true;
				draft.updatePost.isError = false;
				draft.updatePost.errorMessage = null;
				break;
			case UPDATE_POST_SUCCEED:
				draft.updatePost.post = action.payload;
				draft.updatePost.isLoading = false;
				draft.updatePost.isError = false;
				draft.updatePost.errorMessage = null;
				break;
			case UPDATE_POST_FAILED:
				draft.updatePost.post = {};
				draft.updatePost.isLoading = false;
				draft.updatePost.isError = true;
				draft.updatePost.errorMessage = action.payload;
				break;
			case UPDATE_POST_RESETED:
				draft.updatePost.post = {};
				draft.updatePost.isLoading = false;
				draft.updatePost.isError = false;
				draft.updatePost.errorMessage = null;
				break;
			//
			case DELETE_POST_REQUESTED:
				draft.deletePost.post = {};
				draft.deletePost.isLoading = true;
				draft.deletePost.isError = false;
				draft.deletePost.errorMessage = null;
				break;
			case DELETE_POST_SUCCEED:
				draft.deletePost.post = action.payload;
				draft.deletePost.isLoading = false;
				draft.deletePost.isError = false;
				draft.deletePost.errorMessage = null;
				break;
			case DELETE_POST_FAILED:
				draft.deletePost.post = {};
				draft.deletePost.isLoading = false;
				draft.deletePost.isError = true;
				draft.deletePost.errorMessage = action.payload;
				break;
			case DELETE_POST_RESETED:
				draft.deletePost.post = {};
				draft.deletePost.isLoading = false;
				draft.deletePost.isError = false;
				draft.deletePost.errorMessage = null;
				break;
			default:
				break;
		}
	});

export default postReducer;
