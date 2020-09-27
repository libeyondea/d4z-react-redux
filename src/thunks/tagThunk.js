import { fetchTagRequestedAction, fetchTagSucceedAction, fetchTagFailedAction } from '../actions/tagAction';
import axios from 'axios';

export const fetchTagThunk = () => async (dispatch) => {
	try {
		dispatch(fetchTagRequestedAction());
		const res = await axios.get(`${process.env.API_URL}/tags`);
		if (res.data.success) {
			dispatch(fetchTagSucceedAction(res.data.data));
		}
	} catch (err) {
		dispatch(fetchTagFailedAction(err.message));
	}
};
