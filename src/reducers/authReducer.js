import {
	REGISTER_REQUESTED,
	REGISTER_SUCCEED,
	REGISTER_FAILED,
	REGISTER_RESETED,
	LOGIN_REQUESTED,
	LOGIN_SUCCEED,
	LOGIN_FAILED,
	LOGIN_RESETED
} from '../constants/authConstant';
import { produce } from 'immer';

const initialState = {
	register: {
		user: {},
		isLoading: false,
		isError: false,
		errorMessage: {}
	},
	login: {
		isAuthenticated: false,
		user: {},
		isLoading: false,
		isError: false,
		errorMessage: {}
	}
};
const authReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case REGISTER_REQUESTED:
				draft.register.user = {};
				draft.register.isLoading = true;
				draft.register.isError = false;
				draft.register.errorMessage = {};
				break;
			case REGISTER_SUCCEED:
				draft.register.user = action.payload;
				draft.register.isLoading = false;
				draft.register.isError = false;
				draft.register.errorMessage = {};
				break;
			case REGISTER_FAILED:
				draft.register.user = {};
				draft.register.isLoading = false;
				draft.register.isError = true;
				draft.register.errorMessage = action.payload;
				break;
			case REGISTER_RESETED:
				draft.register.user = {};
				draft.register.isLoading = false;
				draft.register.isError = false;
				draft.register.errorMessage = {};
				break;

			case LOGIN_REQUESTED:
				draft.login.isAuthenticated = false;
				draft.login.user = {};
				draft.login.isLoading = true;
				draft.login.isError = false;
				draft.login.errorMessage = {};
				break;
			case LOGIN_SUCCEED:
				draft.login.isAuthenticated = action.payload.isAuthenticated;
				draft.login.user = action.payload.user;
				draft.login.isLoading = false;
				draft.login.isError = false;
				draft.login.errorMessage = {};
				break;
			case LOGIN_FAILED:
				draft.login.isAuthenticated = false;
				draft.login.user = {};
				draft.login.isLoading = false;
				draft.login.isError = true;
				draft.login.errorMessage = action.payload;
				break;
			case LOGIN_RESETED: // Logout here
				draft.login.isAuthenticated = false;
				draft.login.user = {};
				draft.login.isLoading = false;
				draft.login.isError = false;
				draft.login.errorMessage = {};
				break;
			default:
				break;
		}
	});

export default authReducer;
