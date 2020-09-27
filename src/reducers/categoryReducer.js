import { FETCH_CATEGORY_REQUESTED, FETCH_CATEGORY_SUCCEED, FETCH_CATEGORY_FAILED } from '../constants/categoryConstant';
import { produce } from 'immer';

const fetchCategoryInitialState = {
	categories: [],
	loading: true,
	errors: {}
};
export const fetchCategoryReducer = (state = fetchCategoryInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_CATEGORY_REQUESTED:
				draft.categories = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case FETCH_CATEGORY_SUCCEED:
				draft.categories = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case FETCH_CATEGORY_FAILED:
				draft.categories = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
