import {
	fetchUserRequestedAction,
	fetchUserSucceedAction,
	fetchUserFailedAction,
	fetchUserResetedAction,
	createUserRequestedAction,
	createUserSucceedAction,
	createUserFailedAction,
	createUserResetedAction,
	singleUserRequestedAction,
	singleUserSucceedAction,
	singleUserFailedAction,
	singleUserResetedAction,
	editUserRequestedAction,
	editUserSucceedAction,
	editUserFailedAction,
	editUserResetedAction,
	updateUserRequestedAction,
	updateUserSucceedAction,
	updateUserFailedAction,
	updateUserResetedAction,
	deleteUserRequestedAction,
	deleteUserSucceedAction,
	deleteUserFailedAction,
	deleteUserResetedAction
} from '../actions/userAction';
import axios from 'axios';

export const fetchUserThunk = () => async (dispatch) => {
	try {
		dispatch(fetchUserRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/users`);
		if (res.data.success) {
			dispatch(fetchUserSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchUserFailedAction(err.message));
	}
};

export const fetchUserResetedThunk = () => (dispatch) => {
	dispatch(fetchUserResetedAction());
};

export const createUserThunk = (user, slug, history) => async (dispatch) => {
	try {
		dispatch(createUserRequestedAction());
		const res = await axios.post(`${process.env.API_URL}/users`, user);
		if (res.data.success) {
			dispatch(createUserSucceedAction(res.data.data));
			history.push(`/users/${slug}`);
		} else {
			dispatch(updateUserFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(createUserFailedAction(err.message));
	}
};

export const createUserResetedThunk = () => (dispatch) => {
	dispatch(createUserResetedAction());
};

export const singleUserThunk = (id, user_name) => async (dispatch) => {
	try {
		dispatch(singleUserRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/users/${id}/${user_name}`);
		if (res.data.success) {
			dispatch(singleUserSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(singleUserFailedAction(err.message));
	}
};

export const singleUserResetedThunk = () => (dispatch) => {
	dispatch(singleUserResetedAction());
};

export const editUserThunk = (slug) => async (dispatch) => {
	try {
		dispatch(editUserRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/users/${slug}/edit`);
		if (res.data.success) {
			dispatch(editUserSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(editUserFailedAction(err));
	}
};

export const editUserResetedThunk = () => (dispatch) => {
	dispatch(editUserResetedAction());
};

export const updateUserThunk = (user, history, slug, newSlug) => async (dispatch) => {
	try {
		dispatch(updateUserRequestedAction());
		const res = await axios.put(`${process.env.API_URL}/users/${slug}`, user);
		if (res.data.success) {
			dispatch(updateUserSucceedAction(res.data.data));
			history.push(`/users/${newSlug}`);
		} else {
			dispatch(updateUserFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(updateUserFailedAction(err.message));
	}
};

export const updateUserResetedThunk = () => (dispatch) => {
	dispatch(updateUserResetedAction());
};

export const deleteUserThunk = (slug, history) => async (dispatch) => {
	try {
		dispatch(deleteUserRequestedAction());
		const res = await axios.delete(`${process.env.API_URL}/users/${slug}`);
		if (res.data.success) {
			dispatch(deleteUserSucceedAction(res.data.data));
			history.push('/');
		}
	} catch (err) {
		dispatch(deleteUserFailedAction(err.message));
	}
};

export const deleteUserResetedThunk = () => (dispatch) => {
	dispatch(deleteUserResetedAction());
};
