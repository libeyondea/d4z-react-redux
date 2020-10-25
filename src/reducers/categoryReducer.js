import {
	FETCH_CATEGORY_REQUESTED,
	FETCH_CATEGORY_SUCCEED,
	FETCH_CATEGORY_FAILED,
	FETCH_CATEGORY_RESETED,
	FETCH_RECURSIVE_CATEGORY_REQUESTED,
	FETCH_RECURSIVE_CATEGORY_SUCCEED,
	FETCH_RECURSIVE_CATEGORY_FAILED,
	FETCH_RECURSIVE_CATEGORY_RESETED,
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
import { produce } from 'immer';

const initialState = {
	fetchCategory: {
		category: [],
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	fetchRecursiveCategory: {
		category: [],
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	createCategory: {
		category: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	singleCategory: {
		category: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	editCategory: {
		category: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	updateCategory: {
		category: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	deleteCategory: {
		category: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	}
};

const categoryReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_CATEGORY_REQUESTED:
				draft.fetchCategory.category = [];
				draft.fetchCategory.isLoading = true;
				draft.fetchCategory.isError = false;
				draft.fetchCategory.errorMessage = null;
				break;
			case FETCH_CATEGORY_SUCCEED:
				draft.fetchCategory.category = action.payload;
				draft.fetchCategory.isLoading = false;
				draft.fetchCategory.isError = false;
				draft.fetchCategory.errorMessage = null;
				break;
			case FETCH_CATEGORY_FAILED:
				draft.fetchCategory.category = [];
				draft.fetchCategory.isLoading = false;
				draft.fetchCategory.isError = true;
				draft.fetchCategory.errorMessage = action.payload;
				break;
			case FETCH_CATEGORY_RESETED:
				draft.fetchCategory.category = [];
				draft.fetchCategory.isLoading = false;
				draft.fetchCategory.isError = false;
				draft.fetchCategory.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case FETCH_RECURSIVE_CATEGORY_REQUESTED:
				draft.fetchRecursiveCategory.category = [];
				draft.fetchRecursiveCategory.isLoading = true;
				draft.fetchRecursiveCategory.isError = false;
				draft.fetchRecursiveCategory.errorMessage = null;
				break;
			case FETCH_RECURSIVE_CATEGORY_SUCCEED:
				draft.fetchRecursiveCategory.category = action.payload;
				draft.fetchRecursiveCategory.isLoading = false;
				draft.fetchRecursiveCategory.isError = false;
				draft.fetchRecursiveCategory.errorMessage = null;
				break;
			case FETCH_RECURSIVE_CATEGORY_FAILED:
				draft.fetchRecursiveCategory.category = [];
				draft.fetchRecursiveCategory.isLoading = false;
				draft.fetchRecursiveCategory.isError = true;
				draft.fetchRecursiveCategory.errorMessage = action.payload;
				break;
			case FETCH_RECURSIVE_CATEGORY_RESETED:
				draft.fetchRecursiveCategory.category = [];
				draft.fetchRecursiveCategory.isLoading = false;
				draft.fetchRecursiveCategory.isError = false;
				draft.fetchRecursiveCategory.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case CREATE_CATEGORY_REQUESTED:
				draft.createCategory.category = {};
				draft.createCategory.isLoading = true;
				draft.createCategory.isError = false;
				draft.createCategory.errorMessage = null;
				break;
			case CREATE_CATEGORY_SUCCEED:
				draft.createCategory.category = action.payload;
				draft.createCategory.isLoading = false;
				draft.createCategory.isError = false;
				draft.createCategory.errorMessage = null;
				break;
			case CREATE_CATEGORY_FAILED:
				draft.createCategory.category = {};
				draft.createCategory.isLoading = false;
				draft.createCategory.isError = true;
				draft.createCategory.errorMessage = action.payload;
				break;
			case CREATE_CATEGORY_RESETED:
				draft.createCategory.category = {};
				draft.createCategory.isLoading = false;
				draft.createCategory.isError = false;
				draft.createCategory.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case SINGLE_CATEGORY_REQUESTED:
				draft.singleCategory.category = {};
				draft.singleCategory.isLoading = true;
				draft.singleCategory.isError = false;
				draft.singleCategory.errorMessage = null;
				break;
			case SINGLE_CATEGORY_SUCCEED:
				draft.singleCategory.category = action.payload;
				draft.singleCategory.isLoading = false;
				draft.singleCategory.isError = false;
				draft.singleCategory.errorMessage = null;
				break;
			case SINGLE_CATEGORY_FAILED:
				draft.singleCategory.category = {};
				draft.singleCategory.isLoading = false;
				draft.singleCategory.isError = true;
				draft.singleCategory.errorMessage = action.payload;
				break;
			case SINGLE_CATEGORY_RESETED:
				draft.singleCategory.category = {};
				draft.singleCategory.isLoading = false;
				draft.singleCategory.isError = false;
				draft.singleCategory.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case EDIT_CATEGORY_REQUESTED:
				draft.editCategory.category = {};
				draft.editCategory.isLoading = true;
				draft.editCategory.isError = false;
				draft.editCategory.errorMessage = null;
				break;
			case EDIT_CATEGORY_SUCCEED:
				draft.editCategory.category = action.payload;
				draft.editCategory.isLoading = false;
				draft.editCategory.isError = false;
				draft.editCategory.errorMessage = null;
				break;
			case EDIT_CATEGORY_FAILED:
				draft.editCategory.category = {};
				draft.editCategory.isLoading = false;
				draft.editCategory.isError = true;
				draft.editCategory.errorMessage = action.payload;
				break;
			case EDIT_CATEGORY_RESETED:
				draft.editCategory.category = {};
				draft.editCategory.isLoading = false;
				draft.editCategory.isError = false;
				draft.editCategory.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case UPDATE_CATEGORY_REQUESTED:
				draft.updateCategory.category = {};
				draft.updateCategory.isLoading = true;
				draft.updateCategory.isError = false;
				draft.updateCategory.errorMessage = null;
				break;
			case UPDATE_CATEGORY_SUCCEED:
				draft.updateCategory.category = action.payload;
				draft.updateCategory.isLoading = false;
				draft.updateCategory.isError = false;
				draft.updateCategory.errorMessage = null;
				break;
			case UPDATE_CATEGORY_FAILED:
				draft.updateCategory.category = {};
				draft.updateCategory.isLoading = false;
				draft.updateCategory.isError = true;
				draft.updateCategory.errorMessage = action.payload;
				break;
			case UPDATE_CATEGORY_RESETED:
				draft.updateCategory.category = {};
				draft.updateCategory.isLoading = false;
				draft.updateCategory.isError = false;
				draft.updateCategory.errorMessage = null;
				break;
			// D4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4ZD4Z
			case DELETE_CATEGORY_REQUESTED:
				draft.deleteCategory.category = {};
				draft.deleteCategory.isLoading = true;
				draft.deleteCategory.isError = false;
				draft.deleteCategory.errorMessage = null;
				break;
			case DELETE_CATEGORY_SUCCEED:
				draft.deleteCategory.category = action.payload;
				draft.deleteCategory.isLoading = false;
				draft.deleteCategory.isError = false;
				draft.deleteCategory.errorMessage = null;
				break;
			case DELETE_CATEGORY_FAILED:
				draft.deleteCategory.category = {};
				draft.deleteCategory.isLoading = false;
				draft.deleteCategory.isError = true;
				draft.deleteCategory.errorMessage = action.payload;
				break;
			case DELETE_CATEGORY_RESETED:
				draft.deleteCategory.category = {};
				draft.deleteCategory.isLoading = false;
				draft.deleteCategory.isError = false;
				draft.deleteCategory.errorMessage = null;
				break;
			default:
				break;
		}
	});

export default categoryReducer;
