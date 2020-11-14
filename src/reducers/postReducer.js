import {
	FETCH_POST_REQUESTED,
	FETCH_POST_SUCCEED,
	SORT_BY_TITLE_POST_SUCCEED,
	SORT_BY_CREATED_AT_POST_SUCCEED,
	FILTER_BY_VALUE_POST_SUCCEED,
	FETCH_NEW_PAGE_POST_SUCCEED,
	FETCH_EXACT_PAGE_POST_SUCCEED,
	FETCH_POST_FAILED,
	FETCH_POST_RESETED,
	CREATE_POST_REQUESTED,
	CREATE_POST_SUCCEED,
	CREATE_POST_FAILED,
	CREATE_POST_RESETED,
	SINGLE_POST_REQUESTED,
	SINGLE_POST_SUCCEED,
	SINGLE_POST_FAILED,
	SINGLE_POST_RESETED,
	EDIT_POST_REQUESTED,
	EDIT_POST_SUCCEED,
	EDIT_POST_FAILED,
	EDIT_POST_RESETED,
	UPDATE_POST_REQUESTED,
	UPDATE_POST_SUCCEED,
	UPDATE_POST_FAILED,
	UPDATE_POST_RESETED,
	DELETE_POST_REQUESTED,
	DELETE_POST_SUCCEED,
	DELETE_POST_FAILED,
	DELETE_POST_RESETED
} from '../constants/postConstant';
import { produce } from 'immer';

function sortAsc(arr, field) {
	return arr.sort(function (a, b) {
		if (a[field] > b[field]) return 1;
		if (b[field] > a[field]) return -1;
		return 0;
	});
}

function sortDesc(arr, field) {
	return arr.sort(function (a, b) {
		if (a[field] > b[field]) return -1;
		if (b[field] > a[field]) return 1;
		return 0;
	});
}

function addFilterIfNotExists(filter, appliedFilters) {
	let index = appliedFilters.indexOf(filter);
	if (index === -1) appliedFilters.push(filter);
	return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
	let index = appliedFilters.indexOf(filter);
	appliedFilters.splice(index, 1);
	return appliedFilters;
}
const initialState = {
	fetchPost: {
		appliedFilters: [],
		post: [],
		filteredPost: [],
		isLoading: true,
		isError: false,
		errorMessage: {},
		currentCount: 0,
		currentPage: 0,
		countPerPage: 0,
		totalCount: 0,
		totalPages: 0,
		filteredPages: 0,
		filteredCount: 0
	},
	createPost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: {}
	},
	singlePost: {
		post: {},
		isLoading: true,
		isError: false,
		errorMessage: {}
	},
	editPost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	},
	updatePost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: {}
	},
	deletePost: {
		post: {},
		isLoading: false,
		isError: false,
		errorMessage: null
	}
};
const postReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_POST_REQUESTED:
				draft.fetchPost.isLoading = true;
				break;
			case SORT_BY_TITLE_POST_SUCCEED:
				let sortedAlphabetArr =
					action.payload === 'asc' ? sortAsc(draft.fetchPost.post, 'title') : sortDesc(draft.fetchPost.post, 'title');
				draft.fetchPost.filteredPost = sortedAlphabetArr.slice(
					draft.fetchPost.currentCount - draft.fetchPost.countPerPage,
					draft.fetchPost.currentCount
				);
				draft.fetchPost.appliedFilters = addFilterIfNotExists(
					SORT_BY_TITLE_POST_SUCCEED,
					draft.fetchPost.appliedFilters
				);
				draft.fetchPost.appliedFilters = removeFilter(SORT_BY_TITLE_POST_SUCCEED, draft.fetchPost.appliedFilters);
				break;
			case SORT_BY_CREATED_AT_POST_SUCCEED:
				let sortedPriceArr =
					action.payload === 'asc'
						? sortAsc(draft.fetchPost.post, 'created_at')
						: sortDesc(draft.fetchPost.post, 'created_at');
				draft.fetchPost.filteredPost = sortedPriceArr.slice(
					draft.fetchPost.currentCount - draft.fetchPost.countPerPage,
					draft.fetchPost.currentCount
				);
				draft.fetchPost.appliedFilters = addFilterIfNotExists(
					SORT_BY_TITLE_POST_SUCCEED,
					draft.fetchPost.appliedFilters
				);
				draft.fetchPost.appliedFilters = removeFilter(SORT_BY_TITLE_POST_SUCCEED, draft.fetchPost.appliedFilters);
				break;
			case FILTER_BY_VALUE_POST_SUCCEED:
				let value = action.payload;
				let filteredValues = draft.fetchPost.post.filter((post) => {
					return (
						post.title.toLowerCase().includes(value) ||
						post.summary.toLowerCase().includes(value) ||
						post.meta_description.toLowerCase().includes(value)
					);
				});
				let appliedFilters = draft.fetchPost.appliedFilters;
				if (value) {
					appliedFilters = addFilterIfNotExists(FILTER_BY_VALUE_POST_SUCCEED, appliedFilters);
					//draft.fetchPost.currentPage = 1;
					draft.fetchPost.filteredPost = filteredValues;
					draft.fetchPost.filteredCount = draft.fetchPost.filteredPost.length;
					//draft.fetchPost.filteredPages = Math.ceil(draft.fetchPost.filteredCount / draft.fetchPost.countPerPage);
					draft.fetchPost.filteredPages = 1;
				} else {
					appliedFilters = removeFilter(FILTER_BY_VALUE_POST_SUCCEED, appliedFilters);
					if (appliedFilters.length === 0) {
						draft.fetchPost.filteredPost = draft.fetchPost.post.slice(
							draft.fetchPost.currentCount - draft.fetchPost.countPerPage,
							draft.fetchPost.currentCount
						);
						//draft.fetchPost.currentPage = 1;
						draft.fetchPost.filteredCount = draft.fetchPost.totalCount;
						//draft.fetchPost.filteredPages = Math.ceil(draft.fetchPost.filteredCount / draft.fetchPost.countPerPage);
						draft.fetchPost.filteredPages = draft.fetchPost.totalPages;
					}
				}
				break;
			case FETCH_POST_SUCCEED:
				let post = sortDesc(action.payload.post, 'created_at');
				let countPerPage = action.payload.countPerPage || 6;
				let count = Object.keys(post).length;
				let totalPages = Math.ceil(count / countPerPage);
				// Default page
				let defaultPage = parseInt(action.payload.currentPage);
				if (defaultPage < 1 || defaultPage > totalPages || !/^\d+$/.test(defaultPage)) {
					defaultPage = 1;
				}
				let upperCountExactDefault = countPerPage * defaultPage;
				let lowerCountExactDefault = upperCountExactDefault - countPerPage;
				let exactPostDefault = post.slice(lowerCountExactDefault, upperCountExactDefault);
				draft.fetchPost.isLoading = false;
				draft.fetchPost.filteredPost = exactPostDefault;
				draft.fetchPost.post = post;
				draft.fetchPost.currentCount = upperCountExactDefault;
				draft.fetchPost.currentPage = defaultPage;
				// End default page

				//draft.fetchPost.filteredPost = post.slice(0, countPerPage);
				//draft.fetchPost.currentCount = countPerPage;
				draft.fetchPost.countPerPage = countPerPage;
				draft.fetchPost.totalCount = count;
				//draft.fetchPost.currentPage = 1;
				draft.fetchPost.totalPages = totalPages;
				draft.fetchPost.filteredPages = totalPages;
				window.history.pushState({ page: 1 }, 'title 1', `?page=${defaultPage}`);
				break;
			case FETCH_NEW_PAGE_POST_SUCCEED:
				//Clone the previous state
				//How many pages should be added. Will always be 1 or -1
				let addPages = action.payload;
				let test = draft.fetchPost.currentPage + addPages;
				if (test > draft.fetchPost.totalPages) {
					draft.fetchPost.currentPage = draft.fetchPost.totalPages;
				} else if (test < 1) {
					draft.fetchPost.currentPage = 1;
				} else {
					//add it to the current
					draft.fetchPost.currentPage = test;
				}
				let perPage = draft.fetchPost.countPerPage; //20 by default
				let nextPost;
				if (addPages === 1) {
					//Moving from page 1 to 2 will cause ‘upperCount’ to be 40
					//let upperCount = draft.currentCount + perPage;
					let lowerCount = draft.fetchPost.currentCount; //This hasn’t been changed. It will remain 20.
					let getCurrentCount = draft.fetchPost.currentCount;
					let getMaxTotal = draft.fetchPost.countPerPage * draft.fetchPost.totalPages;
					if (getCurrentCount === getMaxTotal) {
						getCurrentCount = getMaxTotal;
						lowerCount = draft.fetchPost.currentCount - perPage;
					} else {
						getCurrentCount += draft.fetchPost.countPerPage;
					}
					draft.fetchPost.currentCount = getCurrentCount;
					nextPost = draft.fetchPost.post.slice(lowerCount, getCurrentCount);
				}
				if (addPages === -1) {
					let upperCount = draft.fetchPost.currentCount; //40
					//let lowerCount = draft.fetchPost.currentCount - perPage; //20
					let getCurrentCount = draft.fetchPost.currentCount;
					let getCountPerPage = draft.fetchPost.countPerPage;
					//draft.fetchPost.currentCount -= draft.fetchPost.countPerPage;

					if (getCurrentCount === getCountPerPage) {
						getCurrentCount = getCountPerPage;
						upperCount = draft.fetchPost.currentCount + perPage;
					} else {
						getCurrentCount -= getCountPerPage;
					}
					draft.fetchPost.currentCount = getCurrentCount;
					nextPost = draft.fetchPost.post.slice(getCurrentCount - perPage, upperCount - perPage);
				}
				draft.fetchPost.filteredPost = nextPost;
				window.history.pushState({ page: 1 }, 'title 1', `?page=${draft.fetchPost.currentPage}`);
				break;
			case FETCH_EXACT_PAGE_POST_SUCCEED:
				let exactPage = action.payload;
				let upperCountExact = draft.fetchPost.countPerPage * exactPage;
				let lowerCountExact = upperCountExact - draft.fetchPost.countPerPage;
				let exactPost = draft.fetchPost.post.slice(lowerCountExact, upperCountExact);

				draft.fetchPost.filteredPost = exactPost;
				draft.fetchPost.currentCount = upperCountExact;
				draft.fetchPost.currentPage = exactPage;
				window.history.pushState({ page: 1 }, 'title 1', `?page=${draft.fetchPost.currentPage}`);
				break;
			case FETCH_POST_FAILED:
				draft.fetchPost.isLoading = false;
				draft.fetchPost.isError = true;
				draft.fetchPost.errorMessage = action.payload;
				break;
			case FETCH_POST_RESETED:
				draft.fetchPost.appliedFilters = [];
				draft.fetchPost.post = [];
				draft.fetchPost.filteredPost = [];
				draft.fetchPost.isLoading = true;
				draft.fetchPost.isError = false;
				draft.fetchPost.errorMessage = {};
				draft.fetchPost.currentCount = 0;
				draft.fetchPost.currentPage = 0;
				draft.fetchPost.countPerPage = 0;
				draft.fetchPost.totalCount = 0;
				draft.fetchPost.totalPages = 0;
				draft.fetchPost.filteredPages = 0;
				draft.fetchPost.filteredCount = 0;
				break;
			//
			case CREATE_POST_REQUESTED:
				draft.createPost.post = {};
				draft.createPost.isLoading = true;
				draft.createPost.isError = false;
				draft.createPost.errorMessage = {};
				break;
			case CREATE_POST_SUCCEED:
				draft.createPost.post = action.payload;
				draft.createPost.isLoading = false;
				draft.createPost.isError = false;
				draft.createPost.errorMessage = {};
				break;
			case CREATE_POST_FAILED:
				draft.createPost.post = {};
				draft.createPost.isLoading = false;
				draft.createPost.isError = true;
				draft.createPost.errorMessage = action.payload;
				break;
			case CREATE_POST_RESETED:
				draft.createPost.post = {};
				draft.createPost.isLoading = false;
				draft.createPost.isError = false;
				draft.createPost.errorMessage = {};
				break;
			//
			case SINGLE_POST_REQUESTED:
				draft.singlePost.post = {};
				draft.singlePost.isLoading = true;
				draft.singlePost.isError = false;
				draft.singlePost.errorMessage = {};
				break;
			case SINGLE_POST_SUCCEED:
				draft.singlePost.post = action.payload;
				draft.singlePost.isLoading = false;
				draft.singlePost.isError = false;
				draft.singlePost.errorMessage = {};
				break;
			case SINGLE_POST_FAILED:
				draft.singlePost.post = {};
				draft.singlePost.isLoading = false;
				draft.singlePost.isError = true;
				draft.singlePost.errorMessage = action.payload;
				break;
			case SINGLE_POST_RESETED:
				draft.singlePost.post = {};
				draft.singlePost.isLoading = true;
				draft.singlePost.isError = false;
				draft.singlePost.errorMessage = {};
				break;
			//
			case EDIT_POST_REQUESTED:
				draft.editPost.post = {};
				draft.editPost.isLoading = true;
				draft.editPost.isError = false;
				draft.editPost.errorMessage = null;
				break;
			case EDIT_POST_SUCCEED:
				draft.editPost.post = action.payload;
				draft.editPost.isLoading = false;
				draft.editPost.isError = false;
				draft.editPost.errorMessage = null;
				break;
			case EDIT_POST_FAILED:
				draft.editPost.post = {};
				draft.editPost.isLoading = false;
				draft.editPost.isError = true;
				draft.editPost.errorMessage = action.payload;
				break;
			case EDIT_POST_RESETED:
				draft.editPost.post = {};
				draft.editPost.isLoading = false;
				draft.editPost.isError = false;
				draft.editPost.errorMessage = null;
				break;
			//
			case UPDATE_POST_REQUESTED:
				draft.updatePost.post = {};
				draft.updatePost.isLoading = true;
				draft.updatePost.isError = false;
				draft.updatePost.errorMessage = {};
				break;
			case UPDATE_POST_SUCCEED:
				draft.updatePost.post = action.payload;
				draft.updatePost.isLoading = false;
				draft.updatePost.isError = false;
				draft.updatePost.errorMessage = {};
				break;
			case UPDATE_POST_FAILED:
				draft.updatePost.post = {};
				draft.updatePost.isLoading = false;
				draft.updatePost.isError = true;
				draft.updatePost.errorMessage = action.payload;
				break;
			case UPDATE_POST_RESETED:
				draft.updatePost.post = {};
				draft.updatePost.isLoading = false;
				draft.updatePost.isError = false;
				draft.updatePost.errorMessage = {};
				break;
			//
			case DELETE_POST_REQUESTED:
				draft.deletePost.post = {};
				draft.deletePost.isLoading = true;
				draft.deletePost.isError = false;
				draft.deletePost.errorMessage = null;
				break;
			case DELETE_POST_SUCCEED:
				draft.deletePost.post = action.payload;
				draft.deletePost.isLoading = false;
				draft.deletePost.isError = false;
				draft.deletePost.errorMessage = null;
				break;
			case DELETE_POST_FAILED:
				draft.deletePost.post = {};
				draft.deletePost.isLoading = false;
				draft.deletePost.isError = true;
				draft.deletePost.errorMessage = action.payload;
				break;
			case DELETE_POST_RESETED:
				draft.deletePost.post = {};
				draft.deletePost.isLoading = false;
				draft.deletePost.isError = false;
				draft.deletePost.errorMessage = null;
				break;
			default:
				break;
		}
	});

export default postReducer;
