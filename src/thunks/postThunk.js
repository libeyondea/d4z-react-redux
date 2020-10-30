import {
	fetchPostRequestedAction,
	fetchPostSucceedAction,
	sortByPostSucceedAction,
	filterByPostSucceedAction,
	fetchPostFailedAction,
	fetchPostResetedAction,
	createPostRequestedAction,
	createPostSucceedAction,
	createPostFailedAction,
	createPostResetedAction,
	singlePostRequestedAction,
	singlePostSucceedAction,
	singlePostFailedAction,
	singlePostResetedAction,
	editPostRequestedAction,
	editPostSucceedAction,
	editPostFailedAction,
	editPostResetedAction,
	updatePostRequestedAction,
	updatePostSucceedAction,
	updatePostFailedAction,
	updatePostResetedAction,
	deletePostRequestedAction,
	deletePostSucceedAction,
	deletePostFailedAction,
	deletePostResetedAction
} from '../actions/postAction';
import axios from 'axios';

export const fetchPostThunk = () => async (dispatch) => {
	try {
		dispatch(fetchPostRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
		if (res.data.success) {
			dispatch(fetchPostSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchPostFailedAction(err.message));
	}
};

export const sortByPostThunk = (sortBy) => async (dispatch) => {
	try {
		//dispatch(fetchPostRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
		if (res.data.success) {
			if (sortBy) {
				dispatch(sortByPostSucceedAction(sortBy));
			}
		}
	} catch (err) {
		dispatch(fetchPostFailedAction(err.message));
	}
};

export const filterByPostThunk = (filterBy) => async (dispatch) => {
	try {
		//dispatch(fetchPostRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
		if (res.data.success) {
			dispatch(filterByPostSucceedAction(filterBy));
		}
	} catch (err) {
		dispatch(fetchPostFailedAction(err.message));
	}
};

export const fetchPostResetedThunk = () => (dispatch) => {
	dispatch(fetchPostResetedAction());
};

export const createPostThunk = (post, history) => async (dispatch) => {
	try {
		dispatch(createPostRequestedAction());
		const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts`, post);
		if (res.data.success) {
			dispatch(createPostSucceedAction(res.data.data));
			history.push(`/posts/${post.id}/${post.slug}`);
		} else {
			dispatch(createPostFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(createPostFailedAction(err.message));
	}
};

export const createPostResetedThunk = () => (dispatch) => {
	dispatch(createPostResetedAction());
};

export const singlePostThunk = (id) => async (dispatch) => {
	try {
		dispatch(singlePostRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`);
		if (res.data.success) {
			dispatch(singlePostSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(singlePostFailedAction(err.message));
	}
};

export const singlePostResetedThunk = () => (dispatch) => {
	dispatch(singlePostResetedAction());
};

export const editPostThunk = (id) => async (dispatch) => {
	try {
		dispatch(editPostRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}/edit`);
		if (res.data.success) {
			dispatch(editPostSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(editPostFailedAction(err));
	}
};

export const editPostResetedThunk = () => (dispatch) => {
	dispatch(editPostResetedAction());
};

export const updatePostThunk = (post, id, history) => async (dispatch) => {
	try {
		dispatch(updatePostRequestedAction());
		const res = await axios.put(`${process.env.REACT_APP_API_URL}/posts/${id}`, post);
		if (res.data.success) {
			dispatch(updatePostSucceedAction(res.data.data));
			history.push(`/posts/${id}/${post.slug}`);
		} else {
			dispatch(updatePostFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(updatePostFailedAction(err.message));
	}
};

export const updatePostResetedThunk = () => (dispatch) => {
	dispatch(updatePostResetedAction());
};

export const deletePostThunk = (id, history) => async (dispatch) => {
	try {
		dispatch(deletePostRequestedAction());
		const res = await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`);
		if (res.data.success) {
			dispatch(deletePostSucceedAction(res.data.data));
			history.push('/');
		}
	} catch (err) {
		dispatch(deletePostFailedAction(err.message));
	}
};

export const deletePostResetedThunk = () => (dispatch) => {
	dispatch(deletePostResetedAction());
};
