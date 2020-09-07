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

const createPostAction = (post) => async (dispatch) => {
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

const updatePostAction = (post) => async (dispatch) => {
    try {

    } catch (error) {

    }
}

const deletePostAction = (post) => async (dispatch) => {
    try {

    } catch (error) {

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

export {
    fetchPostAction,
    createPostAction,
    detailPostAction
}