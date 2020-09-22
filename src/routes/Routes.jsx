import React from 'react';
import { BrowserRouter as Switch } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import AuthRoute from './AuthRoute';
import PostRoute from './PostRoute';
import ErrorRoute from './ErrorRoute';

const Routes = () => {
	return (
		<Switch>
			<HomeRoute />
			<AuthRoute />
			<PostRoute />
			<ErrorRoute />
		</Switch>
	);
};
export default Routes;
