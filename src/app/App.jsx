import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../helpers/setAuthToken';
import { loginSucceedAction, loginResetedAction } from '../actions/authAction';
import Routes from '../routes/Routes';
import '../styles/app.css';
//import '../styles/form.css';

if (localStorage.getItem('jwtToken')) {
	setAuthToken(localStorage.jwtToken);
	const decoded = jwt_decode(localStorage.jwtToken);
	store.dispatch(loginSucceedAction(true, decoded));
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		localStorage.removeItem('jwtToken');
		setAuthToken(false);
		store.dispatch(loginResetedAction());
		window.location.href = '/login';
	}
}
const App = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};

export default App;
