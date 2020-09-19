import React from 'react';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import AuthRouteLogF from '../guards/AuthRouteLogF';

const AuthRoute = () => {
	return (
		<>
			<AuthRouteLogF path="/login" component={Login} />
			<AuthRouteLogF path="/register" component={Register} />
		</>
	);
};
export default AuthRoute;
