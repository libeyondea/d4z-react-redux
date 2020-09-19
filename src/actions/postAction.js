import {
	FETCH_POST_REQUESTED,
	FETCH_POST_SUCCEED,
	FETCH_POST_FAILED,
	CREATE_POST_REQUESTED,
	CREATE_POST_SUCCEED,
	CREATE_POST_FAILED,
	SINGLE_POST_REQUESTED,
	SINGLE_POST_SUCCEED,
	SINGLE_POST_FAILED,
	EDIT_POST_REQUESTED,
	EDIT_POST_SUCCEED,
	EDIT_POST_FAILED,
	UPDATE_POST_REQUESTED,
	UPDATE_POST_SUCCEED,
	UPDATE_POST_FAILED,
	DELETE_POST_REQUESTED,
	DELETE_POST_SUCCEED,
	DELETE_POST_FAILED
} from '../constants/postConstant';

export const fetchPostRequestedAction = () => ({
	type: FETCH_POST_REQUESTED
});
export const fetchPostSucceedAction = (payload) => ({
	type: FETCH_POST_SUCCEED,
	payload
});
export const fetchPostFailedAction = (payload) => ({
	type: FETCH_POST_FAILED,
	payload
});
//
export const createPostRequestedAction = () => ({
	type: CREATE_POST_REQUESTED
});
export const createPostSucceedAction = (payload) => ({
	type: CREATE_POST_SUCCEED,
	payload
});
export const createPostFailedAction = (payload) => ({
	type: CREATE_POST_FAILED,
	payload
});
//
export const singlePostRequestedAction = () => ({
	type: SINGLE_POST_REQUESTED
});
export const singlePostSucceedAction = (payload) => ({
	type: SINGLE_POST_SUCCEED,
	payload
});
export const singlePostFailedAction = (payload) => ({
	type: SINGLE_POST_FAILED,
	payload
});
//
export const editPostRequestedAction = () => ({
	type: EDIT_POST_REQUESTED
});
export const editPostSucceedAction = (payload) => ({
	type: EDIT_POST_SUCCEED,
	payload
});
export const editPostFailedAction = (payload) => ({
	type: EDIT_POST_FAILED,
	payload
});
//
export const updatePostRequestedAction = () => ({
	type: UPDATE_POST_REQUESTED
});
export const updatePostSucceedAction = (payload) => ({
	type: UPDATE_POST_SUCCEED,
	payload
});
export const updatePostFailedAction = (payload) => ({
	type: UPDATE_POST_FAILED,
	payload
});
//
export const deletePostRequestedAction = () => ({
	type: DELETE_POST_REQUESTED
});
export const deletePostSucceedAction = (payload) => ({
	type: DELETE_POST_SUCCEED,
	payload
});
export const deletePostFailedAction = (payload) => ({
	type: DELETE_POST_FAILED,
	payload
});
