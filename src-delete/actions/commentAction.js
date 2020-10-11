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
export const fetchCommentResetedAction = () => ({
	type: FETCH_COMMENT_RESETED
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
export const createCommentResetedAction = () => ({
	type: CREATE_COMMENT_RESETED
});

export const createReplyCommentRequestedAction = () => ({
	type: CREATE_REPLY_COMMENT_REQUESTED
});
export const createReplyCommentSucceedAction = (payload) => ({
	type: CREATE_REPLY_COMMENT_SUCCEED,
	payload
});
export const createReplyCommentFailedAction = (payload) => ({
	type: CREATE_REPLY_COMMENT_FAILED,
	payload
});
export const createReplyCommentResetedAction = () => ({
	type: CREATE_REPLY_COMMENT_RESETED
});
