import {
	REGISTER_REQUESTED,
	REGISTER_SUCCEED,
	REGISTER_FAILED,
	LOGIN_REQUESTED,
	LOGIN_SUCCEED,
	LOGIN_FAILED
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
//
export const loginRequestedAction = () => ({
	type: LOGIN_REQUESTED
});
export const loginSucceedAction = (payload) => ({
	type: LOGIN_SUCCEED,
	payload
});
export const loginFailedAction = (payload) => ({
	type: LOGIN_FAILED,
	payload
});
