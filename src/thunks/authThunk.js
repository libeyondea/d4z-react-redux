import {
	registerRequestedAction,
	registerSucceedAction,
	registerFailedAction,
	registerResetedAction,
	loginRequestedAction,
	loginSucceedAction,
	loginFailedAction,
	loginResetedAction
} from '../actions/authAction';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../helpers/setAuthToken';

export const registerThunk = (user, history) => async (dispatch) => {
	try {
		dispatch(registerRequestedAction());
		const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, user);
		if (res.data.success) {
			dispatch(registerSucceedAction(res.data.data));
			history.push('/login');
		} else {
			dispatch(registerFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(registerFailedAction(err.message));
	}
};

export const registerResetedThunk = () => (dispatch) => {
	dispatch(registerResetedAction());
};

export const loginThunk = (user) => async (dispatch) => {
	try {
		dispatch(loginRequestedAction());
		const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, user);
		if (res.data.success) {
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			setAuthToken(token);
			const decoded = jwt_decode(token);
			dispatch(loginSucceedAction(true, decoded));
		} else {
			dispatch(loginFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(loginFailedAction(err.message));
	}
};

export const loginResetedThunk = () => (dispatch) => {
	dispatch(loginResetedAction());
};

export const logoutThunk = (history) => (dispatch) => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(loginResetedAction());
	history.push('/login');
};
