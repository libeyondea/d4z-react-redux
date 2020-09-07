import {
    FETCH_POST_REQUESTED,
    FETCH_POST_SUCCEED,
	FETCH_POST_FAILED,
	CREATE_POST_REQUESTED,
	CREATE_POST_SUCCEED,
	CREATE_POST_FAILED,
	DETAIL_POST_REQUESTED,
	DETAIL_POST_SUCCEED,
	DETAIL_POST_FAILED
} from '../constants/postConstant';

const fetchPostInitialState = {
	posts: [],
	loading: true,
	errors: {}
}

const createPostInitialState = {
	posts: {},
	loading: false,
	errors: {}
}

const detailPostInitialState = {
	posts: {},
	loading: true,
	errors: {}
}

const fetchPostReducer = (state = fetchPostInitialState, action) => {
	switch (action.type) {
		case FETCH_POST_REQUESTED:
			return {
				...state,
				posts: [],
				loading: true,
				errors: {}
			};
		case FETCH_POST_SUCCEED:
            return {
            	...state,
        		posts: action.payload,
        		loading: false,
				errors: {}
            };
		case FETCH_POST_FAILED:
            return {
            	...state,
        		posts: [],
        		loading: false,
				errors: action.payload
            };
		default:
			return state;
	}
};

const createPostReducer = (state = createPostInitialState, action) => {
	switch(action.type) {
		case CREATE_POST_REQUESTED:
			return {
				...state,
				posts: {},
				loading: true,
				errors: {}
			}
		case CREATE_POST_SUCCEED:
			return {
				...state,
				posts: action.payload,
				loading: false,
				errors: {}
			}
		case CREATE_POST_FAILED:
			return {
				...state,
				posts: {},
				loading: false,
				errors: action.payload
			}
		default: 
			return state;
	}
}

const detailPostReducer = (state = detailPostInitialState, action) => {
	switch (action.type) {
		case DETAIL_POST_REQUESTED:
			return {
				...state,
				posts: {},
				loading: true,
				errors: {}
			};
		case DETAIL_POST_SUCCEED:
            return {
            	...state,
        		posts: action.payload,
        		loading: false,
				errors: {}
            };
		case DETAIL_POST_FAILED:
            return {
            	...state,
        		posts: {},
        		loading: false,
				errors: action.payload
            };
		default:
			return state;
	}
};

export {
	fetchPostReducer,
	createPostReducer,
	detailPostReducer
}