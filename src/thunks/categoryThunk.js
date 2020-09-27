import {
	fetchCategoryRequestedAction,
	fetchCategorySucceedAction,
	fetchCategoryFailedAction
} from '../actions/categoryAction';
import axios from 'axios';

export const fetchCategoryThunk = () => async (dispatch) => {
	try {
		dispatch(fetchCategoryRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/categories`);
		if (res.data.success) {
			dispatch(fetchCategorySucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchCategoryFailedAction(err.message));
	}
};
