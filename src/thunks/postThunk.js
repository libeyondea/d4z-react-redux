import {
	fetchPostRequestedAction,
	fetchPostSucceedAction,
	fetchPostFailedAction,
	createPostRequestedAction,
	createPostSucceedAction,
	createPostFailedAction,
	singlePostRequestedAction,
	singlePostSucceedAction,
	singlePostFailedAction,
	editPostRequestedAction,
	editPostSucceedAction,
	editPostFailedAction,
	updatePostRequestedAction,
	updatePostSucceedAction,
	updatePostFailedAction,
	deletePostRequestedAction,
	deletePostSucceedAction,
	deletePostFailedAction
} from '../actions/postAction';
import axios from 'axios';

export const fetchPostThunk = () => async (dispatch) => {
	try {
		dispatch(fetchPostRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/posts`);
		if (res.data.success) {
			dispatch(fetchPostSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchPostFailedAction(err.message));
	}
};

export const createPostThunk = (post, slug, history) => async (dispatch) => {
	try {
		dispatch(createPostRequestedAction());
		const res = await axios.post(`${process.env.API_URL}/posts`, post);
		if (res.data.success) {
			dispatch(createPostSucceedAction(res.data.data));
			history.push(`/posts/${slug}`);
		} else {
			dispatch(updatePostFailedAction(res.data.errors));
		}
	} catch (err) {
		dispatch(createPostFailedAction(err.message));
	}
};

export const singlePostThunk = (slug) => async (dispatch) => {
	try {
		dispatch(singlePostRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/posts/${slug}`);
		if (res.data.success) {
			dispatch(singlePostSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(singlePostFailedAction(err.message));
	}
};

export const editPostThunk = (slug) => async (dispatch) => {
	try {
		dispatch(editPostRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/posts/${slug}/edit`);
		if (res.data.success) {
			dispatch(editPostSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(editPostFailedAction(err));
	}
};

export const updatePostThunk = (post, history, slug, newSlug) => async (dispatch) => {
	try {
		dispatch(updatePostRequestedAction());
		const res = await axios.put(`${process.env.API_URL}/posts/${slug}`, post);
		if (res.data.success) {
			dispatch(updatePostSucceedAction(res.data.data));
			history.push(`/posts/${newSlug}`);
		} else {
			dispatch(updatePostFailedAction(res.data.errors));
		}
	} catch (err) {
		dispatch(updatePostFailedAction(err.message));
	}
};

export const deletePostThunk = (slug, history) => async (dispatch) => {
	try {
		dispatch(deletePostRequestedAction());
		const res = await axios.delete(`${process.env.API_URL}/posts/${slug}`);
		if (res.data.success) {
			dispatch(deletePostSucceedAction(res.data.data));
			history.push('/');
		}
	} catch (err) {
		dispatch(deletePostFailedAction(err.message));
	}
};
