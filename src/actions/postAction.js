import {
    FETCH_POST_REQUESTED,
    FETCH_POST_SUCCEED,
    FETCH_POST_FAILED,
    CREATE_POST_REQUESTED,
    CREATE_POST_SUCCEED,
    CREATE_POST_FAILED,
    DETAIL_POST_REQUESTED,
    DETAIL_POST_SUCCEED,
    DETAIL_POST_FAILED,
    EDIT_POST_REQUESTED,
	EDIT_POST_SUCCEED,
	EDIT_POST_FAILED,
	UPDATE_POST_REQUESTED,
	UPDATE_POST_SUCCEED,
    UPDATE_POST_FAILED,
    DELETE_POST_REQUESTED,
	DELETE_POST_SUCCEED,
	DELETE_POST_FAILED
} from '../constants/postConstant';
import axios from 'axios';

const fetchPostAction = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_POST_REQUESTED
        });
        const response = await axios.get('http://localhost:5000/api/posts');
        dispatch({
            type: FETCH_POST_SUCCEED,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_POST_FAILED,
            payload: error.message
        });
    }
}

const createPostAction = (post, slug, history) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_POST_REQUESTED
        });
        const response = await axios.post('http://localhost:5000/api/posts', post);
        if (response.data.success) {
            dispatch({
                type: CREATE_POST_SUCCEED,
                payload: response.data.data
            });
            history.push(`/posts/${slug}`);
        } else {
            dispatch({
                type: CREATE_POST_FAILED,
                payload: response.data.errors
            });
        }
    } catch (error) {
        dispatch({
            type: CREATE_POST_FAILED,
            payload: error.message
        });
    }
}

const detailPostAction = (slug) => async (dispatch) => {
    try {
        dispatch({
            type: DETAIL_POST_REQUESTED
        });
        const response = await axios.get(`http://localhost:5000/api/posts/${slug}`);
        dispatch({
            type: DETAIL_POST_SUCCEED,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: DETAIL_POST_FAILED,
            payload: error.message
        });
    }
}

const editPostAction = (slug) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_POST_REQUESTED
        });
        const response = await axios.get(`http://localhost:5000/api/posts/${slug}/edit`);
        dispatch({
            type: EDIT_POST_SUCCEED,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: EDIT_POST_FAILED,
            payload: error.message
        });
    }
}

const updatePostAction = (post, history, slug, slugNew) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_POST_REQUESTED
        });
        const response = await axios.put(`http://localhost:5000/api/posts/${slug}`, post);
        if (response.data.success) {
            dispatch({
                type: UPDATE_POST_SUCCEED,
                payload: response.data.data
            });
            history.push(`/posts/${slugNew}`);
        } else {
            dispatch({
                type: UPDATE_POST_FAILED,
                payload: response.data.errors
            });
        }
    } catch (error) {
        dispatch({
            type: UPDATE_POST_FAILED,
            payload: error.message
        });
    }
}

const deletePostAction = (slug, history) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_POST_REQUESTED
        });
        const response = await axios.delete(`http://localhost:5000/api/posts/${slug}`);
        if (response.data.success) {
            dispatch({
                type: DELETE_POST_SUCCEED,
                payload: response.data.data
            });
            history.push('/');
        } else {
            dispatch({
                type: DELETE_POST_FAILED,
                payload: response.data.errors
            });
        }
    } catch (error) {
        dispatch({
            type: DELETE_POST_FAILED,
            payload: error.message
        });
    }
}

export {
    fetchPostAction,
    createPostAction,
    detailPostAction,
    editPostAction,
    updatePostAction,
    deletePostAction
}