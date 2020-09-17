import {
	LOGIN_REQUESTED,
	LOGIN_SUCCEED,
	LOGIN_FAILED,
	REGISTER_REQUESTED,
	REGISTER_SUCCEED,
	REGISTER_FAILED
} from '../constants/authConstant';
import isEmpty from '../functions/is-empty';
import { produce } from 'immer'

const loginInitialState = {
	isAuthenticated: false,
	user: {},
	isLoading: false,
	errors: {}
}

const registerInitialState = {
	user: {},
	isLoading: false,
	errors: {},
}

const loginReducer = (state = loginInitialState, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case LOGIN_REQUESTED:
				draft.isAuthenticated = false
				draft.user = {}
				draft.isLoading = true
				draft.errors = {}
				break
			case LOGIN_SUCCEED:
				draft.isAuthenticated = !isEmpty(action.payload)
				draft.user = action.payload
				draft.isLoading = false
				draft.errors = {}
				break
			case LOGIN_FAILED:
				draft.isAuthenticated = false
				draft.user = {}
				draft.isLoading = false
				draft.errors = action.payload
				break
			default:
				break
		}
	})
}

const registerReducer = (state = registerInitialState, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case REGISTER_REQUESTED:
				draft.user = {}
				draft.isLoading = true
				draft.errors = {}
				break
			case REGISTER_SUCCEED:
				draft.user = action.payload
				draft.isLoading = false
				draft.errors = {}
				break
			case REGISTER_FAILED:
				draft.user = {}
				draft.isLoading = false
				draft.errors = action.payload
				break
			default:
				break
		}
	})
}

export {
	loginReducer,
	registerReducer
}