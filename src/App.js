import React from 'react';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import store from './stores/store';
import setAuthToken from './functions/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authAction';
import Routes from './routes/Routes';

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}
const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}
export default App;