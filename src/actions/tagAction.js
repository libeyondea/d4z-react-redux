import {
	FETCH_TAG_REQUESTED,
	FETCH_TAG_SUCCEED,
	FETCH_TAG_FAILED,
	FETCH_TAG_RESETED,
	CREATE_TAG_REQUESTED,
	CREATE_TAG_SUCCEED,
	CREATE_TAG_FAILED,
	CREATE_TAG_RESETED,
	SINGLE_TAG_REQUESTED,
	SINGLE_TAG_SUCCEED,
	SINGLE_TAG_FAILED,
	SINGLE_TAG_RESETED,
	EDIT_TAG_REQUESTED,
	EDIT_TAG_SUCCEED,
	EDIT_TAG_FAILED,
	EDIT_TAG_RESETED,
	UPDATE_TAG_REQUESTED,
	UPDATE_TAG_SUCCEED,
	UPDATE_TAG_FAILED,
	UPDATE_TAG_RESETED,
	DELETE_TAG_REQUESTED,
	DELETE_TAG_SUCCEED,
	DELETE_TAG_FAILED,
	DELETE_TAG_RESETED
} from '../constants/tagConstant';

export const fetchTagRequestedAction = () => ({
	type: FETCH_TAG_REQUESTED
});
export const fetchTagSucceedAction = (payload) => ({
	type: FETCH_TAG_SUCCEED,
	payload
});
export const fetchTagFailedAction = (payload) => ({
	type: FETCH_TAG_FAILED,
	payload
});
export const fetchTagResetedAction = () => ({
	type: FETCH_TAG_RESETED
});

export const createTagRequestedAction = () => ({
	type: CREATE_TAG_REQUESTED
});
export const createTagSucceedAction = (payload) => ({
	type: CREATE_TAG_SUCCEED,
	payload
});
export const createTagFailedAction = (payload) => ({
	type: CREATE_TAG_FAILED,
	payload
});
export const createTagResetedAction = () => ({
	type: CREATE_TAG_RESETED
});

export const singleTagRequestedAction = () => ({
	type: SINGLE_TAG_REQUESTED
});
export const singleTagSucceedAction = (payload) => ({
	type: SINGLE_TAG_SUCCEED,
	payload
});
export const singleTagFailedAction = (payload) => ({
	type: SINGLE_TAG_FAILED,
	payload
});
export const singleTagResetedAction = () => ({
	type: SINGLE_TAG_RESETED
});

export const editTagRequestedAction = () => ({
	type: EDIT_TAG_REQUESTED
});
export const editTagSucceedAction = (payload) => ({
	type: EDIT_TAG_SUCCEED,
	payload
});
export const editTagFailedAction = (payload) => ({
	type: EDIT_TAG_FAILED,
	payload
});
export const editTagResetedAction = () => ({
	type: EDIT_TAG_RESETED
});

export const updateTagRequestedAction = () => ({
	type: UPDATE_TAG_REQUESTED
});
export const updateTagSucceedAction = (payload) => ({
	type: UPDATE_TAG_SUCCEED,
	payload
});
export const updateTagFailedAction = (payload) => ({
	type: UPDATE_TAG_FAILED,
	payload
});
export const updateTagResetedAction = () => ({
	type: UPDATE_TAG_RESETED
});

export const deleteTagRequestedAction = () => ({
	type: DELETE_TAG_REQUESTED
});
export const deleteTagSucceedAction = (payload) => ({
	type: DELETE_TAG_SUCCEED,
	payload
});
export const deleteTagFailedAction = (payload) => ({
	type: DELETE_TAG_FAILED,
	payload
});
export const deleteTagResetedAction = () => ({
	type: DELETE_TAG_RESETED
});
