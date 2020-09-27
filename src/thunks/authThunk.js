import {
	registerRequestedAction,
	registerSucceedAction,
	registerFailedAction,
	loginRequestedAction,
	loginSucceedAction,
	loginFailedAction
} from '../actions/authAction';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../helpers/setAuthToken';

export const registerThunk = (user, history) => async (dispatch) => {
	try {
		dispatch(registerRequestedAction());
		const res = await axios.post(`${process.env.API_URL}/users/register`, user);
		if (res.data.success) {
			dispatch(registerSucceedAction(res.data.data));
			history.push('/login');
		} else {
			dispatch(registerFailedAction(res.data.errors));
		}
	} catch (err) {
		dispatch(registerFailedAction(err.message));
	}
};
export const loginThunk = (user) => async (dispatch) => {
	try {
		dispatch(loginRequestedAction());
		const res = await axios.post(`${process.env.API_URL}/users/login`, user);
		if (res.data.success) {
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			setAuthToken(token);
			const decoded = jwt_decode(token);
			dispatch(loginSucceedAction(decoded));
		} else {
			dispatch(loginFailedAction(res.data.errors));
		}
	} catch (err) {
		dispatch(loginFailedAction(err.data.errors));
	}
};
export const logoutThunk = (history) => (dispatch) => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(loginSucceedAction({}));
	history.push('/login');
};
