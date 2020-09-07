import {
    LOGIN_REQUESTED,
    LOGIN_SUCCEED,
    LOGIN_FAILED,
    REGISTER_REQUESTED,
    REGISTER_SUCCEED,
    REGISTER_FAILED
} from '../constants/authConstant';
import isEmpty from '../functions/is-empty';

const loginInitialState = {
	isAuthenticated: false,
	user: {},
	isLoading: false,
	errors: {}
}

const registerInitialState = {
	isLoading: false,
	errors: {},
}

const loginReducer = (state = loginInitialState, action) => {
	switch(action.type) {
		case LOGIN_REQUESTED:
			return {
				...state,
				isAuthenticated: false,
				user: {},
				isLoading: true,
				errors: {}
			}
		case LOGIN_SUCCEED:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
				isLoading: false,
				errors: {}
			}
		case LOGIN_FAILED:
			return {
				...state,
				isAuthenticated: false,
				user: {},
				isLoading: false,
				errors: action.payload
			}
		default: 
			return state;
	}
}

const registerReducer = (state = registerInitialState, action) => {
	switch(action.type) {
		case REGISTER_REQUESTED:
			return {
				...state,
				isLoading: true,
				errors: {}
			}
		case REGISTER_SUCCEED:
			return {
				...state,
				isLoading: false,
				errors: {}
			}
		case REGISTER_FAILED:
			return {
				...state,
				isLoading: false,
				errors: action.payload
			}
		default: 
			return state;
	}
}

export {
    loginReducer,
    registerReducer
}