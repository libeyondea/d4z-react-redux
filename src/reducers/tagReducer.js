import { FETCH_TAG_REQUESTED, FETCH_TAG_SUCCEED, FETCH_TAG_FAILED } from '../constants/tagConstant';
import { produce } from 'immer';

const fetchTagInitialState = {
	tags: [],
	loading: true,
	errors: {}
};
export const fetchTagReducer = (state = fetchTagInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_TAG_REQUESTED:
				draft.tags = [];
				draft.loading = true;
				draft.errors = {};
				break;
			case FETCH_TAG_SUCCEED:
				draft.tags = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case FETCH_TAG_FAILED:
				draft.tags = [];
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
