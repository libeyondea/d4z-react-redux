import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import store from './stores/store';
import setAuthToken from './functions/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authAction';
import Navbar from './components/Layouts/Navbar';
import Home from './components/Pages/Home';
import Footer from './components/Layouts/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import CreatePost from './components/Posts/CreatePost';
import DetailPost from './components/Posts/DetailPost';

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
			 <Router>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/create-post" component={CreatePost} />
                <Route path="/posts/:slug" component={DetailPost} />
                <Footer />
			</Router>
		</Provider>
    );
}

export default App;