import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './helpers/setAuthToken';
import { loginSucceedAction, loginResetedAction } from './actions/authAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/d4z-blog.scss';
import App from './app/App';

console.log('%c De4th Zone', 'color: red; font-weight: bold; font-size: 100px;');
window.addEventListener('storage', function (e) {
	if (!localStorage.getItem('jwtToken')) {
		setAuthToken(false);
		store.dispatch(loginResetedAction());
		window.location.href = '/login';
	}
});
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
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
