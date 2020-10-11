import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

const ErrorRoute = () => {
	return (
		<>
			<Route path="/404" component={Home} />
		</>
	);
};

export default ErrorRoute;
