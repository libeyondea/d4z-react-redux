import { produce } from 'immer';

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
	}
};

const FETCH_POST_REQUESTED = 'FETCH_POST_REQUESTED';
const FETCH_POST_FAILED = 'FETCH_POST_FAILED';
const FETCH_POST_RESETED = 'FETCH_POST_RESETED';
const FETCH_POST_SUCCEED = 'FETCH_POST_SUCCEED';
const SORT_BY_TITLE_POST_SUCCEED = 'SORT_BY_TITLE_POST_SUCCEED';
const SORT_BY_CREATED_AT_POST_SUCCEED = 'SORT_BY_CREATED_AT_POST_SUCCEED';
const FILTER_BY_VALUE_POST_SUCCEED = 'FILTER_BY_VALUE_POST_SUCCEED';
const FETCH_NEW_PAGE_POST_SUCCEED = 'FETCH_NEW_PAGE_POST_SUCCEED';
const FETCH_EXACT_PAGE_POST_SUCCEED = 'FETCH_EXACT_PAGE_POST_SUCCEED';

export const fetchPostRequestedAction = () => ({
	type: FETCH_POST_REQUESTED
});
export const sortByCreatedAtPostSucceedAction = (payload) => ({
	type: SORT_BY_CREATED_AT_POST_SUCCEED,
	payload
});
export const sortByTitlePostSucceedAction = (payload) => ({
	type: SORT_BY_TITLE_POST_SUCCEED,
	payload
});
export const fetchPostSucceedAction = (post, countPerPage, currentPage) => ({
	type: FETCH_POST_SUCCEED,
	payload: {
		post: post,
		countPerPage: countPerPage,
		currentPage: currentPage
	}
});
export const filterByValuePostSucceedAction = (payload) => ({
	type: FILTER_BY_VALUE_POST_SUCCEED,
	payload
});
export const fetchNewPagePostSucceedAction = (payload) => ({
	type: FETCH_NEW_PAGE_POST_SUCCEED,
	payload
});
export const fetchExactPagePostSucceedAction = (payload) => ({
	type: FETCH_EXACT_PAGE_POST_SUCCEED,
	payload
});
export const fetchPostFailedAction = (payload) => ({
	type: FETCH_POST_FAILED,
	payload
});
export const fetchPostResetedAction = () => ({
	type: FETCH_POST_RESETED
});

const filterStore = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_POST_REQUESTED:
				draft.fetchPost.isLoading = true;
				break;
			case SORT_BY_TITLE_POST_SUCCEED:
				let sortedAlphabetArr =
					action.payload === 'asc'
						? sortAsc(draft.fetchPost.filteredPost, 'title')
						: sortDesc(draft.fetchPost.filteredPost, 'title');
				draft.fetchPost.filteredPost = sortedAlphabetArr;
				draft.fetchPost.appliedFilters = addFilterIfNotExists(
					SORT_BY_TITLE_POST_SUCCEED,
					draft.fetchPost.appliedFilters
				);
				draft.fetchPost.appliedFilters = removeFilter(SORT_BY_TITLE_POST_SUCCEED, draft.fetchPost.appliedFilters);
				break;
			case SORT_BY_CREATED_AT_POST_SUCCEED:
				let sortedPriceArr =
					action.payload === 'asc'
						? sortAsc(draft.fetchPost.filteredPost, 'created_at')
						: sortDesc(draft.fetchPost.filteredPost, 'created_at');
				draft.fetchPost.filteredPost = sortedPriceArr;
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
				let post = action.payload.post;
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
			default:
				break;
		}
	});

export default filterStore;

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
