import {
	FETCH_CATEGORY_REQUESTED,
	FETCH_CATEGORY_SUCCEED,
	FETCH_CATEGORY_FAILED,
	FETCH_CATEGORY_RESETED,
	CREATE_CATEGORY_REQUESTED,
	CREATE_CATEGORY_SUCCEED,
	CREATE_CATEGORY_FAILED,
	CREATE_CATEGORY_RESETED,
	SINGLE_CATEGORY_REQUESTED,
	SINGLE_CATEGORY_SUCCEED,
	SINGLE_CATEGORY_FAILED,
	SINGLE_CATEGORY_RESETED,
	EDIT_CATEGORY_REQUESTED,
	EDIT_CATEGORY_SUCCEED,
	EDIT_CATEGORY_FAILED,
	EDIT_CATEGORY_RESETED,
	UPDATE_CATEGORY_REQUESTED,
	UPDATE_CATEGORY_SUCCEED,
	UPDATE_CATEGORY_FAILED,
	UPDATE_CATEGORY_RESETED,
	DELETE_CATEGORY_REQUESTED,
	DELETE_CATEGORY_SUCCEED,
	DELETE_CATEGORY_FAILED,
	DELETE_CATEGORY_RESETED
} from '../constants/categoryConstant';

export const fetchCategoryRequestedAction = () => ({
	type: FETCH_CATEGORY_REQUESTED
});
export const fetchCategorySucceedAction = (payload) => ({
	type: FETCH_CATEGORY_SUCCEED,
	payload
});
export const fetchCategoryFailedAction = (payload) => ({
	type: FETCH_CATEGORY_FAILED,
	payload
});
export const fetchCategoryResetedAction = () => ({
	type: FETCH_CATEGORY_RESETED
});

export const createCategoryRequestedAction = () => ({
	type: CREATE_CATEGORY_REQUESTED
});
export const createCategorySucceedAction = (payload) => ({
	type: CREATE_CATEGORY_SUCCEED,
	payload
});
export const createCategoryFailedAction = (payload) => ({
	type: CREATE_CATEGORY_FAILED,
	payload
});
export const createCategoryResetedAction = () => ({
	type: CREATE_CATEGORY_RESETED
});

export const singleCategoryRequestedAction = () => ({
	type: SINGLE_CATEGORY_REQUESTED
});
export const singleCategorySucceedAction = (payload) => ({
	type: SINGLE_CATEGORY_SUCCEED,
	payload
});
export const singleCategoryFailedAction = (payload) => ({
	type: SINGLE_CATEGORY_FAILED,
	payload
});
export const singleCategoryResetedAction = () => ({
	type: SINGLE_CATEGORY_RESETED
});

export const editCategoryRequestedAction = () => ({
	type: EDIT_CATEGORY_REQUESTED
});
export const editCategorySucceedAction = (payload) => ({
	type: EDIT_CATEGORY_SUCCEED,
	payload
});
export const editCategoryFailedAction = (payload) => ({
	type: EDIT_CATEGORY_FAILED,
	payload
});
export const editCategoryResetedAction = () => ({
	type: EDIT_CATEGORY_RESETED
});

export const updateCategoryRequestedAction = () => ({
	type: UPDATE_CATEGORY_REQUESTED
});
export const updateCategorySucceedAction = (payload) => ({
	type: UPDATE_CATEGORY_SUCCEED,
	payload
});
export const updateCategoryFailedAction = (payload) => ({
	type: UPDATE_CATEGORY_FAILED,
	payload
});
export const updateCategoryResetedAction = () => ({
	type: UPDATE_CATEGORY_RESETED
});

export const deleteCategoryRequestedAction = () => ({
	type: DELETE_CATEGORY_REQUESTED
});
export const deleteCategorySucceedAction = (payload) => ({
	type: DELETE_CATEGORY_SUCCEED,
	payload
});
export const deleteCategoryFailedAction = (payload) => ({
	type: DELETE_CATEGORY_FAILED,
	payload
});
export const deleteCategoryResetedAction = () => ({
	type: DELETE_CATEGORY_RESETED
});
