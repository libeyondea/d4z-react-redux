import {
	LOGIN_REQUESTED,
	LOGIN_SUCCEED,
	LOGIN_FAILED,
	REGISTER_REQUESTED,
	REGISTER_SUCCEED,
	REGISTER_FAILED
} from '../constants/authConstant';
import { produce } from 'immer';
import isEmpty from '../helpers/isEmpty';

const loginInitialState = {
	isAuthenticated: false,
	user: {},
	loading: false,
	errors: {}
};
const registerInitialState = {
	user: {},
	loading: false,
	errors: {}
};
export const loginReducer = (state = loginInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case LOGIN_REQUESTED:
				draft.isAuthenticated = false;
				draft.user = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case LOGIN_SUCCEED:
				draft.isAuthenticated = !isEmpty(action.payload);
				draft.user = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case LOGIN_FAILED:
				draft.isAuthenticated = false;
				draft.user = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});

export const registerReducer = (state = registerInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case REGISTER_REQUESTED:
				draft.user = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case REGISTER_SUCCEED:
				draft.user = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case REGISTER_FAILED:
				draft.user = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
