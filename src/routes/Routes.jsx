import React from 'react';
import { BrowserRouter as Switch } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import AuthRoute from './AuthRoute';
import UserRoute from './UserRoute';
import PostRoute from './PostRoute';
import TagRoute from './TagRoute';
import ErrorRoute from './ErrorRoute';

const Routes = () => {
	return (
		<Switch>
			<HomeRoute />
			<AuthRoute />
			<UserRoute />
			<PostRoute />
			<TagRoute />
			<ErrorRoute />
		</Switch>
	);
};

export default Routes;
