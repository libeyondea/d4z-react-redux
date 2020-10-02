import {
	FETCH_COMMENT_REQUESTED,
	FETCH_COMMENT_SUCCEED,
	FETCH_COMMENT_CLEAR,
	FETCH_COMMENT_FAILED,
	CREATE_COMMENT_REQUESTED,
	CREATE_COMMENT_SUCCEED,
	CREATE_COMMENT_FAILED,
	CREATE_REPLY_COMMENT_REQUESTED,
	CREATE_REPLY_COMMENT_SUCCEED,
	CREATE_REPLY_COMMENT_FAILED
} from '../constants/commentConstant';
import { produce } from 'immer';

const fetchCommentInitialState = {
	comments: [],
	loading: true,
	errors: {}
};
const createCommentInitialState = {
	comments: {},
	loading: false,
	errors: {}
};
const createReplyCommentInitialState = {
	comments: {},
	loading: false,
	errors: {}
};
export const fetchCommentReducer = (state = fetchCommentInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_COMMENT_REQUESTED:
				draft.comments = draft.comments; //fetch comments auto display
				draft.loading = true;
				draft.errors = {};
				break;
			case FETCH_COMMENT_SUCCEED:
				draft.comments = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case FETCH_COMMENT_CLEAR:
				draft.comments = [];
				draft.loading = true;
				draft.errors = {};
				break;
			case FETCH_COMMENT_FAILED:
				draft.comments = [];
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});

export const createCommentReducer = (state = createCommentInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case CREATE_COMMENT_REQUESTED:
				draft.comments = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case CREATE_COMMENT_SUCCEED:
				draft.comments = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case CREATE_COMMENT_FAILED:
				draft.comments = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});

export const createReplyCommentReducer = (state = createReplyCommentInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case CREATE_REPLY_COMMENT_REQUESTED:
				draft.comments = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case CREATE_REPLY_COMMENT_SUCCEED:
				draft.comments = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case CREATE_REPLY_COMMENT_FAILED:
				draft.comments = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
