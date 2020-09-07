import {
    REGISTER_REQUESTED,
    REGISTER_SUCCEED,
    REGISTER_FAILED,
    LOGIN_REQUESTED,
    LOGIN_SUCCEED,
    LOGIN_FAILED
} from '../constants/authConstant';
import axios from 'axios';
import setAuthToken from '../functions/setAuthToken';
import jwt_decode from 'jwt-decode';

const registerAction = (user, history) => async (dispatch) => {
	try {
        dispatch({
            type: REGISTER_REQUESTED
        });
        const response = await axios.post('http://localhost:5000/api/users/register', user);
        if (response.data.success) {
            dispatch({
            	type: REGISTER_SUCCEED
            });
			history.push('/login');
        } else {
            dispatch({
                type: REGISTER_FAILED,
                payload: response.data.errors
            });
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAILED,
            payload: err.message
        });
    }
}

const loginAction = (user) => async (dispatch) => {
	try {
        dispatch({
            type: LOGIN_REQUESTED
        });
        const response = await axios.post('http://localhost:5000/api/users/login', user);
        if (response.data.success) {
            const { token } = response.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        } else {
            dispatch({
				type: LOGIN_FAILED,
				payload: response.data.errors
			});
        }
    } catch (err) {
        dispatch({
            type: LOGIN_FAILED,
            payload: err.message
        });
    }
}

const setCurrentUser = (decoded) => {
	return {
		type: LOGIN_SUCCEED,
		payload: decoded
	}
}

const logoutUser = (history) => (dispatch) => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(setCurrentUser({}));
	history.push('/login');
}

export {
	registerAction,
	loginAction,
	setCurrentUser,
	logoutUser
}