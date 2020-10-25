import {
	fetchCategoryRequestedAction,
	fetchCategorySucceedAction,
	fetchCategoryFailedAction,
	fetchCategoryResetedAction,
	fetchRecursiveCategoryRequestedAction,
	fetchRecursiveCategorySucceedAction,
	fetchRecursiveCategoryFailedAction,
	fetchRecursiveCategoryResetedAction,
	createCategoryRequestedAction,
	createCategorySucceedAction,
	createCategoryFailedAction,
	createCategoryResetedAction,
	singleCategoryRequestedAction,
	singleCategorySucceedAction,
	singleCategoryFailedAction,
	singleCategoryResetedAction,
	editCategoryRequestedAction,
	editCategorySucceedAction,
	editCategoryFailedAction,
	editCategoryResetedAction,
	updateCategoryRequestedAction,
	updateCategorySucceedAction,
	updateCategoryFailedAction,
	updateCategoryResetedAction,
	deleteCategoryRequestedAction,
	deleteCategorySucceedAction,
	deleteCategoryFailedAction,
	deleteCategoryResetedAction
} from '../actions/categoryAction';
import axios from 'axios';

export const fetchCategoryThunk = () => async (dispatch) => {
	try {
		dispatch(fetchCategoryRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
		if (res.data.success) {
			dispatch(fetchCategorySucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchCategoryFailedAction(err.message));
	}
};

export const fetchCategoryResetedThunk = () => (dispatch) => {
	dispatch(fetchCategoryResetedAction());
};

export const fetchRecursiveCategoryThunk = () => async (dispatch) => {
	try {
		dispatch(fetchRecursiveCategoryRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/recursive-categories`);
		if (res.data.success) {
			dispatch(fetchRecursiveCategorySucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchRecursiveCategoryFailedAction(err.message));
	}
};

export const fetchRecursiveCategoryResetedThunk = () => (dispatch) => {
	dispatch(fetchRecursiveCategoryResetedAction());
};

export const createCategoryThunk = (category, slug, history) => async (dispatch) => {
	try {
		dispatch(createCategoryRequestedAction());
		const res = await axios.post(`${process.env.REACT_APP_API_URL}/categories`, category);
		if (res.data.success) {
			dispatch(createCategorySucceedAction(res.data.data));
			history.push(`/categories/${slug}`);
		} else {
			dispatch(updateCategoryFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(createCategoryFailedAction(err.message));
	}
};

export const createCategoryResetedThunk = () => (dispatch) => {
	dispatch(createCategoryResetedAction());
};

export const singleCategoryThunk = (slug) => async (dispatch) => {
	try {
		dispatch(singleCategoryRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/categories/${slug}`);
		if (res.data.success) {
			dispatch(singleCategorySucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(singleCategoryFailedAction(err.message));
	}
};

export const singleCategoryResetedThunk = () => (dispatch) => {
	dispatch(singleCategoryResetedAction());
};

export const editCategoryThunk = (slug) => async (dispatch) => {
	try {
		dispatch(editCategoryRequestedAction());
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/categories/${slug}/edit`);
		if (res.data.success) {
			dispatch(editCategorySucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(editCategoryFailedAction(err));
	}
};

export const editCategoryResetedThunk = () => (dispatch) => {
	dispatch(editCategoryResetedAction());
};

export const updateCategoryThunk = (category, history, slug, newSlug) => async (dispatch) => {
	try {
		dispatch(updateCategoryRequestedAction());
		const res = await axios.put(`${process.env.REACT_APP_API_URL}/categories/${slug}`, category);
		if (res.data.success) {
			dispatch(updateCategorySucceedAction(res.data.data));
			history.push(`/categories/${newSlug}`);
		} else {
			dispatch(updateCategoryFailedAction(res.data.errorMessage));
		}
	} catch (err) {
		dispatch(updateCategoryFailedAction(err.message));
	}
};

export const updateCategoryResetedThunk = () => (dispatch) => {
	dispatch(updateCategoryResetedAction());
};

export const deleteCategoryThunk = (slug, history) => async (dispatch) => {
	try {
		dispatch(deleteCategoryRequestedAction());
		const res = await axios.delete(`${process.env.REACT_APP_API_URL}/categories/${slug}`);
		if (res.data.success) {
			dispatch(deleteCategorySucceedAction(res.data.data));
			history.push('/');
		}
	} catch (err) {
		dispatch(deleteCategoryFailedAction(err.message));
	}
};

export const deleteCategoryResetedThunk = () => (dispatch) => {
	dispatch(deleteCategoryResetedAction());
};
