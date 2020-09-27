import { FETCH_CATEGORY_REQUESTED, FETCH_CATEGORY_SUCCEED, FETCH_CATEGORY_FAILED } from '../constants/categoryConstant';

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
