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
import { produce } from 'immer';

const initialState = {
	fetchTag: {
		tag: [],
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	createTag: {
		tag: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	singleTag: {
		tag: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	editTag: {
		tag: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	updateTag: {
		tag: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	deleteTag: {
		tag: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	}
};

const tagReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_TAG_REQUESTED:
				draft.fetchTag.tag = [];
				draft.fetchTag.isLoading = true;
				draft.fetchTag.isError = false;
				draft.fetchTag.errorMessage = null;
				break;
			case FETCH_TAG_SUCCEED:
				draft.fetchTag.tag = action.payload;
				draft.fetchTag.isLoading = false;
				draft.fetchTag.isError = false;
				draft.fetchTag.errorMessage = null;
				break;
			case FETCH_TAG_FAILED:
				draft.fetchTag.tag = [];
				draft.fetchTag.isLoading = false;
				draft.fetchTag.isError = true;
				draft.fetchTag.errorMessage = action.payload;
				break;
			case FETCH_TAG_RESETED:
				draft.fetchTag.tag = [];
				draft.fetchTag.isLoading = false;
				draft.fetchTag.isError = false;
				draft.fetchTag.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case CREATE_TAG_REQUESTED:
				draft.createTag.tag = {};
				draft.createTag.isLoading = true;
				draft.createTag.isError = false;
				draft.createTag.errorMessage = null;
				break;
			case CREATE_TAG_SUCCEED:
				draft.createTag.tag = action.payload;
				draft.createTag.isLoading = false;
				draft.createTag.isError = false;
				draft.createTag.errorMessage = null;
				break;
			case CREATE_TAG_FAILED:
				draft.createTag.tag = {};
				draft.createTag.isLoading = false;
				draft.createTag.isError = true;
				draft.createTag.errorMessage = action.payload;
				break;
			case CREATE_TAG_RESETED:
				draft.createTag.tag = {};
				draft.createTag.isLoading = false;
				draft.createTag.isError = false;
				draft.createTag.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case SINGLE_TAG_REQUESTED:
				draft.singleTag.tag = {};
				draft.singleTag.isLoading = true;
				draft.singleTag.isError = false;
				draft.singleTag.errorMessage = null;
				break;
			case SINGLE_TAG_SUCCEED:
				draft.singleTag.tag = action.payload;
				draft.singleTag.isLoading = false;
				draft.singleTag.isError = false;
				draft.singleTag.errorMessage = null;
				break;
			case SINGLE_TAG_FAILED:
				draft.singleTag.tag = {};
				draft.singleTag.isLoading = false;
				draft.singleTag.isError = true;
				draft.singleTag.errorMessage = action.payload;
				break;
			case SINGLE_TAG_RESETED:
				draft.singleTag.tag = {};
				draft.singleTag.isLoading = false;
				draft.singleTag.isError = false;
				draft.singleTag.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case EDIT_TAG_REQUESTED:
				draft.editTag.tag = {};
				draft.editTag.isLoading = true;
				draft.editTag.isError = false;
				draft.editTag.errorMessage = null;
				break;
			case EDIT_TAG_SUCCEED:
				draft.editTag.tag = action.payload;
				draft.editTag.isLoading = false;
				draft.editTag.isError = false;
				draft.editTag.errorMessage = null;
				break;
			case EDIT_TAG_FAILED:
				draft.editTag.tag = {};
				draft.editTag.isLoading = false;
				draft.editTag.isError = true;
				draft.editTag.errorMessage = action.payload;
				break;
			case EDIT_TAG_RESETED:
				draft.editTag.tag = {};
				draft.editTag.isLoading = false;
				draft.editTag.isError = false;
				draft.editTag.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case UPDATE_TAG_REQUESTED:
				draft.updateTag.tag = {};
				draft.updateTag.isLoading = true;
				draft.updateTag.isError = false;
				draft.updateTag.errorMessage = null;
				break;
			case UPDATE_TAG_SUCCEED:
				draft.updateTag.tag = action.payload;
				draft.updateTag.isLoading = false;
				draft.updateTag.isError = false;
				draft.updateTag.errorMessage = null;
				break;
			case UPDATE_TAG_FAILED:
				draft.updateTag.tag = {};
				draft.updateTag.isLoading = false;
				draft.updateTag.isError = true;
				draft.updateTag.errorMessage = action.payload;
				break;
			case UPDATE_TAG_RESETED:
				draft.updateTag.tag = {};
				draft.updateTag.isLoading = false;
				draft.updateTag.isError = false;
				draft.updateTag.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case DELETE_TAG_REQUESTED:
				draft.deleteTag.tag = {};
				draft.deleteTag.isLoading = true;
				draft.deleteTag.isError = false;
				draft.deleteTag.errorMessage = null;
				break;
			case DELETE_TAG_SUCCEED:
				draft.deleteTag.tag = action.payload;
				draft.deleteTag.isLoading = false;
				draft.deleteTag.isError = false;
				draft.deleteTag.errorMessage = null;
				break;
			case DELETE_TAG_FAILED:
				draft.deleteTag.tag = {};
				draft.deleteTag.isLoading = false;
				draft.deleteTag.isError = true;
				draft.deleteTag.errorMessage = action.payload;
				break;
			case DELETE_TAG_RESETED:
				draft.deleteTag.tag = {};
				draft.deleteTag.isLoading = false;
				draft.deleteTag.isError = false;
				draft.deleteTag.errorMessage = null;
				break;
			default:
				break;
		}
	});

export default tagReducer;
