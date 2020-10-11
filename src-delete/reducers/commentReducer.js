import {
	FETCH_COMMENT_REQUESTED,
	FETCH_COMMENT_SUCCEED,
	FETCH_COMMENT_FAILED,
	FETCH_COMMENT_RESETED,
	CREATE_COMMENT_REQUESTED,
	CREATE_COMMENT_SUCCEED,
	CREATE_COMMENT_FAILED,
	CREATE_COMMENT_RESETED,
	CREATE_REPLY_COMMENT_REQUESTED,
	CREATE_REPLY_COMMENT_SUCCEED,
	CREATE_REPLY_COMMENT_FAILED,
	CREATE_REPLY_COMMENT_RESETED
} from '../constants/commentConstant';
import { produce } from 'immer';

const initialState = {
	fetchComment: {
		comment: [],
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	createComment: {
		comment: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	createReplyComment: {
		comment: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	}
};
const commentReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			// FETCH_COMMENT
			case FETCH_COMMENT_REQUESTED:
				//draft.fetchComment.comment = [];
				draft.fetchComment.isLoading = true;
				draft.fetchComment.isError = false;
				draft.fetchComment.errorMessage = null;
				break;
			case FETCH_COMMENT_SUCCEED:
				draft.fetchComment.comment = action.payload;
				draft.fetchComment.isLoading = false;
				draft.fetchComment.isError = false;
				draft.fetchComment.errorMessage = null;
				break;
			case FETCH_COMMENT_FAILED:
				draft.fetchComment.comment = [];
				draft.fetchComment.isLoading = false;
				draft.fetchComment.isError = true;
				draft.fetchComment.errorMessage = action.payload;
				break;
			case FETCH_COMMENT_RESETED:
				draft.fetchComment.comment = [];
				draft.fetchComment.isLoading = false;
				draft.fetchComment.isError = false;
				draft.fetchComment.errorMessage = null;
				break;
			// CREATE_COMMENT
			case CREATE_COMMENT_REQUESTED:
				draft.createComment.comment = {};
				draft.createComment.isLoading = true;
				draft.createComment.isError = false;
				draft.createComment.errorMessage = null;
				break;
			case CREATE_COMMENT_SUCCEED:
				draft.createComment.comment = action.payload;
				draft.createComment.isLoading = false;
				draft.createComment.isError = false;
				draft.createComment.errorMessage = null;
				break;
			case CREATE_COMMENT_FAILED:
				draft.createComment.comment = {};
				draft.createComment.isLoading = false;
				draft.createComment.isError = true;
				draft.createComment.errorMessage = action.payload;
				break;
			case CREATE_COMMENT_RESETED:
				draft.createComment.comment = {};
				draft.createComment.isLoading = false;
				draft.createComment.isError = false;
				draft.createComment.errorMessage = null;
				break;
			// CREATE_REPLY_COMMENT
			case CREATE_REPLY_COMMENT_REQUESTED:
				draft.createReplyComment.comment = {};
				draft.createReplyComment.isLoading = true;
				draft.createReplyComment.isError = false;
				draft.createReplyComment.errorMessage = null;
				break;
			case CREATE_REPLY_COMMENT_SUCCEED:
				draft.createReplyComment.comment = action.payload;
				draft.createReplyComment.isLoading = false;
				draft.createReplyComment.isError = false;
				draft.createReplyComment.errorMessage = null;
				break;
			case CREATE_REPLY_COMMENT_FAILED:
				draft.createReplyComment.comment = {};
				draft.createReplyComment.isLoading = false;
				draft.createReplyComment.isError = true;
				draft.createReplyComment.errorMessage = action.payload;
				break;
			case CREATE_REPLY_COMMENT_RESETED:
				draft.createReplyComment.comment = {};
				draft.createReplyComment.isLoading = false;
				draft.createReplyComment.isError = false;
				draft.createReplyComment.errorMessage = null;
				break;
			default:
				break;
		}
	});

export default commentReducer;
