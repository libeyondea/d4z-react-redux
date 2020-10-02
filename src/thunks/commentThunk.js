import {
	fetchCommentRequestedAction,
	fetchCommentSucceedAction,
	fetchCommentClearAction,
	fetchCommentFailedAction,
	createCommentRequestedAction,
	createCommentSucceedAction,
	createCommentFailedAction,
	createReplyCommentRequestedAction,
	createReplyCommentSucceedAction,
	createReplyCommentFailedAction
} from '../actions/commentAction';
import axios from 'axios';

export const fetchCommentThunk = (slug) => async (dispatch) => {
	try {
		dispatch(fetchCommentRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/comments/${slug}`);
		if (res.data.success) {
			dispatch(fetchCommentSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchCommentFailedAction(err.message));
	}
};

export const fetchCommentClearThunk = () => async (dispatch) => {
	try {
		dispatch(fetchCommentClearAction());
	} catch (err) {
		dispatch(fetchCommentFailedAction(err.message));
	}
};

export const createCommentThunk = (comment, slug) => async (dispatch) => {
	try {
		dispatch(createCommentRequestedAction());
		const res = await axios.post(`${process.env.API_URL}/comments/${slug}`, comment);
		if (res.data.success) {
			dispatch(createCommentSucceedAction(res.data.data));
		} else {
			dispatch(createCommentFailedAction(res.data.errors));
		}
	} catch (err) {
		dispatch(createCommentFailedAction(err.message));
	}
};

export const createReplyCommentThunk = (comment, slug) => async (dispatch) => {
	try {
		dispatch(createReplyCommentRequestedAction());
		const res = await axios.post(`${process.env.API_URL}/comments/reply/${slug}`, comment);
		if (res.data.success) {
			dispatch(createReplyCommentSucceedAction(res.data.data));
		} else {
			dispatch(createReplyCommentFailedAction(res.data.errors));
		}
	} catch (err) {
		dispatch(createReplyCommentFailedAction(err.message));
	}
};
