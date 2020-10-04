import {
	FETCH_USER_REQUESTED,
	FETCH_USER_SUCCEED,
	FETCH_USER_FAILED,
	FETCH_USER_RESETED,
	CREATE_USER_REQUESTED,
	CREATE_USER_SUCCEED,
	CREATE_USER_FAILED,
	CREATE_USER_RESETED,
	SINGLE_USER_REQUESTED,
	SINGLE_USER_SUCCEED,
	SINGLE_USER_FAILED,
	SINGLE_USER_RESETED,
	EDIT_USER_REQUESTED,
	EDIT_USER_SUCCEED,
	EDIT_USER_FAILED,
	EDIT_USER_RESETED,
	UPDATE_USER_REQUESTED,
	UPDATE_USER_SUCCEED,
	UPDATE_USER_FAILED,
	UPDATE_USER_RESETED,
	DELETE_USER_REQUESTED,
	DELETE_USER_SUCCEED,
	DELETE_USER_FAILED,
	DELETE_USER_RESETED
} from '../constants/userConstant';

export const fetchUserRequestedAction = () => ({
	type: FETCH_USER_REQUESTED
});
export const fetchUserSucceedAction = (payload) => ({
	type: FETCH_USER_SUCCEED,
	payload
});
export const fetchUserFailedAction = (payload) => ({
	type: FETCH_USER_FAILED,
	payload
});
export const fetchUserResetedAction = () => ({
	type: FETCH_USER_RESETED
});

export const createUserRequestedAction = () => ({
	type: CREATE_USER_REQUESTED
});
export const createUserSucceedAction = (payload) => ({
	type: CREATE_USER_SUCCEED,
	payload
});
export const createUserFailedAction = (payload) => ({
	type: CREATE_USER_FAILED,
	payload
});
export const createUserResetedAction = () => ({
	type: CREATE_USER_RESETED
});

export const singleUserRequestedAction = () => ({
	type: SINGLE_USER_REQUESTED
});
export const singleUserSucceedAction = (payload) => ({
	type: SINGLE_USER_SUCCEED,
	payload
});
export const singleUserFailedAction = (payload) => ({
	type: SINGLE_USER_FAILED,
	payload
});
export const singleUserResetedAction = () => ({
	type: SINGLE_USER_RESETED
});

export const editUserRequestedAction = () => ({
	type: EDIT_USER_REQUESTED
});
export const editUserSucceedAction = (payload) => ({
	type: EDIT_USER_SUCCEED,
	payload
});
export const editUserFailedAction = (payload) => ({
	type: EDIT_USER_FAILED,
	payload
});
export const editUserResetedAction = () => ({
	type: EDIT_USER_RESETED
});

export const updateUserRequestedAction = () => ({
	type: UPDATE_USER_REQUESTED
});
export const updateUserSucceedAction = (payload) => ({
	type: UPDATE_USER_SUCCEED,
	payload
});
export const updateUserFailedAction = (payload) => ({
	type: UPDATE_USER_FAILED,
	payload
});
export const updateUserResetedAction = () => ({
	type: UPDATE_USER_RESETED
});

export const deleteUserRequestedAction = () => ({
	type: DELETE_USER_REQUESTED
});
export const deleteUserSucceedAction = (payload) => ({
	type: DELETE_USER_SUCCEED,
	payload
});
export const deleteUserFailedAction = (payload) => ({
	type: DELETE_USER_FAILED,
	payload
});
export const deleteUserResetedAction = () => ({
	type: DELETE_USER_RESETED
});
