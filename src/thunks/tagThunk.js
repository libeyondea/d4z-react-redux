import {
	fetchTagRequestedAction,
	fetchTagSucceedAction,
	fetchTagFailedAction,
	fetchTagResetedAction,
	createTagRequestedAction,
	createTagSucceedAction,
	createTagFailedAction,
	createTagResetedAction,
	singleTagRequestedAction,
	singleTagSucceedAction,
	singleTagFailedAction,
	singleTagResetedAction,
	editTagRequestedAction,
	editTagSucceedAction,
	editTagFailedAction,
	editTagResetedAction,
	updateTagRequestedAction,
	updateTagSucceedAction,
	updateTagFailedAction,
	updateTagResetedAction,
	deleteTagRequestedAction,
	deleteTagSucceedAction,
	deleteTagFailedAction,
	deleteTagResetedAction
} from '../actions/tagAction';
import axios from 'axios';

export const fetchTagThunk = () => async (dispatch) => {
	try {
		dispatch(fetchTagRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/tags`);
		if (res.data.success) {
			dispatch(fetchTagSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchTagFailedAction(err.message));
	}
};

export const fetchTagResetedThunk = () => (dispatch) => {
	dispatch(fetchTagResetedAction());
};

export const createTagThunk = (tag, slug, history) => async (dispatch) => {
	try {
		dispatch(createTagRequestedAction());
		const res = await axios.post(`${process.env.REACT_APP_API_URL}/tags`, tag);
		if (res.data.success) {
			dispatch(createTagSucceedAction(res.data.data));
			history.push(`/tags/${slug}`);
		} else {
			dispatch(updateTagFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(createTagFailedAction(err.message));
	}
};

export const createTagResetedThunk = () => (dispatch) => {
	dispatch(createTagResetedAction());
};

export const singleTagThunk = (id) => async (dispatch) => {
	try {
		dispatch(singleTagRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/tags/${id}`);
		if (res.data.success) {
			dispatch(singleTagSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(singleTagFailedAction(err.message));
	}
};

export const singleTagResetedThunk = () => (dispatch) => {
	dispatch(singleTagResetedAction());
};

export const editTagThunk = (slug) => async (dispatch) => {
	try {
		dispatch(editTagRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/tags/${slug}/edit`);
		if (res.data.success) {
			dispatch(editTagSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(editTagFailedAction(err));
	}
};

export const editTagResetedThunk = () => (dispatch) => {
	dispatch(editTagResetedAction());
};

export const updateTagThunk = (tag, history, slug, newSlug) => async (dispatch) => {
	try {
		dispatch(updateTagRequestedAction());
		const res = await axios.put(`${process.env.REACT_APP_API_URL}/tags/${slug}`, tag);
		if (res.data.success) {
			dispatch(updateTagSucceedAction(res.data.data));
			history.push(`/tags/${newSlug}`);
		} else {
			dispatch(updateTagFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(updateTagFailedAction(err.message));
	}
};

export const updateTagResetedThunk = () => (dispatch) => {
	dispatch(updateTagResetedAction());
};

export const deleteTagThunk = (slug, history) => async (dispatch) => {
	try {
		dispatch(deleteTagRequestedAction());
		const res = await axios.delete(`${process.env.REACT_APP_API_URL}/tags/${slug}`);
		if (res.data.success) {
			dispatch(deleteTagSucceedAction(res.data.data));
			history.push('/');
		}
	} catch (err) {
		dispatch(deleteTagFailedAction(err.message));
	}
};

export const deleteTagResetedThunk = () => (dispatch) => {
	dispatch(deleteTagResetedAction());
};
