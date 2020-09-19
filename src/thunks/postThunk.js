import {
    fetchPostRequestedAction,
    fetchPostSucceedAction,
    fetchPostFailedAction,
    createPostRequestedAction,
    createPostSucceedAction,
    createPostFailedAction,
    singlePostRequestedAction,
    singlePostSucceedAction,
    singlePostFailedAction,
    editPostRequestedAction,
    editPostSucceedAction,
    editPostFailedAction,
    updatePostRequestedAction,
    updatePostSucceedAction,
    updatePostFailedAction,
    deletePostRequestedAction,
    deletePostSucceedAction,
    deletePostFailedAction
} from '../actions/postAction';
import axios from 'axios';

export const fetchPostThunk = () => async (dispatch) => {
    try {
        dispatch(fetchPostRequestedAction())
        const response = await axios.get(`${process.env.API_URL}/posts`);
        if (response.data.success) {
            dispatch(fetchPostSucceedAction(response.data.data))
        }
    } catch (error) {
        dispatch(fetchPostFailedAction(error.message))
    }
}

export const createPostThunk = (post, slug, history) => async (dispatch) => {
    try {
        dispatch(createPostRequestedAction())
        const response = await axios.post(`${process.env.API_URL}/posts`, post);
        if (response.data.success) {
            dispatch(createPostSucceedAction(response.data.data))
            history.push(`/posts/${slug}`);
        } else {
            dispatch(createPostFailedAction(response.data.errors))
        }
    } catch (error) {
        dispatch(createPostFailedAction(error.message))
    }
}

export const singlePostThunk = (slug) => async (dispatch) => {
    try {
        dispatch(singlePostRequestedAction())
        const response = await axios.get(`${process.env.API_URL}/posts/${slug}`);
        if (response.data.success) {
            dispatch(singlePostSucceedAction(response.data.data))
        }
    } catch (error) {
        dispatch(singlePostFailedAction(error.message))
    }
}

export const editPostThunk = (slug) => async (dispatch) => {
    try {
        dispatch(editPostRequestedAction())
        const response = await axios.get(`${process.env.API_URL}/posts/${slug}/edit`);
        if (response.data.success) {
            dispatch(editPostSucceedAction(response.data.data))
        }
    } catch (error) {
        dispatch(editPostFailedAction(error.message))
    }
}

export const updatePostThunk = (post, history, slug, slugNew) => async (dispatch) => {
    try {
        dispatch(updatePostRequestedAction())
        const response = await axios.put(`${process.env.API_URL}/posts/${slug}`, post);
        if (response.data.success) {
            dispatch(updatePostSucceedAction(response.data.data))
            history.push(`/posts/${slugNew}`);
        } else {
            dispatch(updatePostFailedAction(response.data.errors))
        }
    } catch (error) {
        dispatch(updatePostFailedAction(error.message))
    }
}

export const deletePostThunk = (slug, history) => async (dispatch) => {
    try {
        dispatch(deletePostRequestedAction())
        const response = await axios.delete(`${process.env.API_URL}/posts/${slug}`);
        if (response.data.success) {
            dispatch(deletePostSucceedAction(response.data.data))
            history.push('/');
        } else {
            dispatch(deletePostFailedAction(response.data.errors))
        }
    } catch (error) {
        dispatch(deletePostFailedAction(error.message))
    }
}