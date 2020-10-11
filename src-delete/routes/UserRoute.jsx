import React from 'react';
import { Route } from 'react-router-dom';
import AuthRouteLogT from '../guards/AuthRouteLogT';
import FetchUser from '../pages/User/FetchUser';
import SingleUser from '../pages/User/SingleUser';

const UserRoute = () => {
	return (
		<>
			<AuthRouteLogT exact path="/users/create" component={FetchUser} />
			<Route exact path="/users" component={FetchUser} />
			<Route exact path="/users/:id/:user_name" component={SingleUser} />
		</>
	);
};

export default UserRoute;
