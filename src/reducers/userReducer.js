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
import { produce } from 'immer';

const initialState = {
	fetchUser: {
		user: [],
		isLoading: true,
		isError: false,
		errorMessage: {}
	},
	createUser: {
		user: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	singleUser: {
		user: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	editUser: {
		user: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	updateUser: {
		user: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	deleteUser: {
		user: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	}
};

const userReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_USER_REQUESTED:
				draft.fetchUser.user = [];
				draft.fetchUser.isLoading = true;
				draft.fetchUser.isError = false;
				draft.fetchUser.errorMessage = {};
				break;
			case FETCH_USER_SUCCEED:
				draft.fetchUser.user = action.payload;
				draft.fetchUser.isLoading = false;
				draft.fetchUser.isError = false;
				draft.fetchUser.errorMessage = {};
				break;
			case FETCH_USER_FAILED:
				draft.fetchUser.user = [];
				draft.fetchUser.isLoading = false;
				draft.fetchUser.isError = true;
				draft.fetchUser.errorMessage = action.payload;
				break;
			case FETCH_USER_RESETED:
				draft.fetchUser.user = [];
				draft.fetchUser.isLoading = true;
				draft.fetchUser.isError = false;
				draft.fetchUser.errorMessage = {};
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case CREATE_USER_REQUESTED:
				draft.createUser.user = {};
				draft.createUser.isLoading = true;
				draft.createUser.isError = false;
				draft.createUser.errorMessage = null;
				break;
			case CREATE_USER_SUCCEED:
				draft.createUser.user = action.payload;
				draft.createUser.isLoading = false;
				draft.createUser.isError = false;
				draft.createUser.errorMessage = null;
				break;
			case CREATE_USER_FAILED:
				draft.createUser.user = {};
				draft.createUser.isLoading = false;
				draft.createUser.isError = true;
				draft.createUser.errorMessage = action.payload;
				break;
			case CREATE_USER_RESETED:
				draft.createUser.user = {};
				draft.createUser.isLoading = false;
				draft.createUser.isError = false;
				draft.createUser.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case SINGLE_USER_REQUESTED:
				draft.singleUser.user = {};
				draft.singleUser.isLoading = true;
				draft.singleUser.isError = false;
				draft.singleUser.errorMessage = null;
				break;
			case SINGLE_USER_SUCCEED:
				draft.singleUser.user = action.payload;
				draft.singleUser.isLoading = false;
				draft.singleUser.isError = false;
				draft.singleUser.errorMessage = null;
				break;
			case SINGLE_USER_FAILED:
				draft.singleUser.user = {};
				draft.singleUser.isLoading = false;
				draft.singleUser.isError = true;
				draft.singleUser.errorMessage = action.payload;
				break;
			case SINGLE_USER_RESETED:
				draft.singleUser.user = {};
				draft.singleUser.isLoading = false;
				draft.singleUser.isError = false;
				draft.singleUser.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case EDIT_USER_REQUESTED:
				draft.editUser.user = {};
				draft.editUser.isLoading = true;
				draft.editUser.isError = false;
				draft.editUser.errorMessage = null;
				break;
			case EDIT_USER_SUCCEED:
				draft.editUser.user = action.payload;
				draft.editUser.isLoading = false;
				draft.editUser.isError = false;
				draft.editUser.errorMessage = null;
				break;
			case EDIT_USER_FAILED:
				draft.editUser.user = {};
				draft.editUser.isLoading = false;
				draft.editUser.isError = true;
				draft.editUser.errorMessage = action.payload;
				break;
			case EDIT_USER_RESETED:
				draft.editUser.user = {};
				draft.editUser.isLoading = false;
				draft.editUser.isError = false;
				draft.editUser.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case UPDATE_USER_REQUESTED:
				draft.updateUser.user = {};
				draft.updateUser.isLoading = true;
				draft.updateUser.isError = false;
				draft.updateUser.errorMessage = null;
				break;
			case UPDATE_USER_SUCCEED:
				draft.updateUser.user = action.payload;
				draft.updateUser.isLoading = false;
				draft.updateUser.isError = false;
				draft.updateUser.errorMessage = null;
				break;
			case UPDATE_USER_FAILED:
				draft.updateUser.user = {};
				draft.updateUser.isLoading = false;
				draft.updateUser.isError = true;
				draft.updateUser.errorMessage = action.payload;
				break;
			case UPDATE_USER_RESETED:
				draft.updateUser.user = {};
				draft.updateUser.isLoading = false;
				draft.updateUser.isError = false;
				draft.updateUser.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case DELETE_USER_REQUESTED:
				draft.deleteUser.user = {};
				draft.deleteUser.isLoading = true;
				draft.deleteUser.isError = false;
				draft.deleteUser.errorMessage = null;
				break;
			case DELETE_USER_SUCCEED:
				draft.deleteUser.user = action.payload;
				draft.deleteUser.isLoading = false;
				draft.deleteUser.isError = false;
				draft.deleteUser.errorMessage = null;
				break;
			case DELETE_USER_FAILED:
				draft.deleteUser.user = {};
				draft.deleteUser.isLoading = false;
				draft.deleteUser.isError = true;
				draft.deleteUser.errorMessage = action.payload;
				break;
			case DELETE_USER_RESETED:
				draft.deleteUser.user = {};
				draft.deleteUser.isLoading = false;
				draft.deleteUser.isError = false;
				draft.deleteUser.errorMessage = null;
				break;
			default:
				break;
		}
	});

export default userReducer;
