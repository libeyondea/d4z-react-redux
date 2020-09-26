import { FETCH_TAG_REQUESTED, FETCH_TAG_SUCCEED, FETCH_TAG_FAILED } from '../constants/tagConstant';

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
