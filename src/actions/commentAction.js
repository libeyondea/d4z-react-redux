import {
	FETCH_COMMENT_REQUESTED,
	FETCH_COMMENT_SUCCEED,
	FETCH_COMMENT_FAILED,
	CREATE_COMMENT_REQUESTED,
	CREATE_COMMENT_SUCCEED,
	CREATE_COMMENT_FAILED
} from '../constants/commentConstant';

export const fetchCommentRequestedAction = () => ({
	type: FETCH_COMMENT_REQUESTED
});
export const fetchCommentSucceedAction = (payload) => ({
	type: FETCH_COMMENT_SUCCEED,
	payload
});
export const fetchCommentFailedAction = (payload) => ({
	type: FETCH_COMMENT_FAILED,
	payload
});

export const createCommentRequestedAction = () => ({
	type: CREATE_COMMENT_REQUESTED
});
export const createCommentSucceedAction = (payload) => ({
	type: CREATE_COMMENT_SUCCEED,
	payload
});
export const createCommentFailedAction = (payload) => ({
	type: CREATE_COMMENT_FAILED,
	payload
});
