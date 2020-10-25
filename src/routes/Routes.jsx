import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthRouteLogT from '../guards/AuthRouteLogT';
import AuthRouteLogF from '../guards/AuthRouteLogF';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Auth/Register'));
const Login = lazy(() => import('../pages/Auth/Login'));

const FetchUser = lazy(() => import('../pages/User/FetchUser'));
const SingleUser = lazy(() => import('../pages/User/SingleUser'));

const CreatePost = lazy(() => import('../pages/Post/CreatePost'));
const SinglePost = lazy(() => import('../pages/Post/SinglePost'));
const EditPost = lazy(() => import('../pages/Post/EditPost'));

const FetchTag = lazy(() => import('../pages/Tag/FetchTag'));
const SingleTag = lazy(() => import('../pages/Tag/SingleTag'));

const FourZeroFour = lazy(() => import('../pages/Error/404'));

const Routes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />

					<AuthRouteLogF exact path="/register" component={Register} />
					<AuthRouteLogF exact path="/login" component={Login} />

					<Route exact path="/users" component={FetchUser} />
					<Route exact path="/users/:id/:user_name" component={SingleUser} />

					<AuthRouteLogT exact path="/posts/create" component={CreatePost} />
					<Route exact path="/posts/:id/:slug" component={SinglePost} />
					<AuthRouteLogT exact path="/posts/:id/:slug/edit" component={EditPost} />

					<Route exact path="/tags" component={FetchTag} />
					<Route exact path="/tags/:id/:slug" component={SingleTag} />

					<Route component={FourZeroFour} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;
