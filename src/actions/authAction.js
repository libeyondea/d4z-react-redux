import {
	REGISTER_REQUESTED,
	REGISTER_SUCCEED,
	REGISTER_FAILED,
	REGISTER_RESETED,
	LOGIN_REQUESTED,
	LOGIN_SUCCEED,
	LOGIN_FAILED,
	LOGIN_RESETED
} from '../constants/authConstant';

export const registerRequestedAction = () => ({
	type: REGISTER_REQUESTED
});
export const registerSucceedAction = (payload) => ({
	type: REGISTER_SUCCEED,
	payload
});
export const registerFailedAction = (payload) => ({
	type: REGISTER_FAILED,
	payload
});
export const registerResetedAction = () => ({
	type: REGISTER_RESETED
});

export const loginRequestedAction = () => ({
	type: LOGIN_REQUESTED
});
export const loginSucceedAction = (isAuthenticated, user) => ({
	type: LOGIN_SUCCEED,
	payload: {
		isAuthenticated: isAuthenticated,
		user: user
	}
});
export const loginFailedAction = (payload) => ({
	type: LOGIN_FAILED,
	payload
});
export const loginResetedAction = () => ({
	type: LOGIN_RESETED
});
