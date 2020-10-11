import React from 'react';
import { Route } from 'react-router-dom';
import FourZeroFour from '../pages/Error/404';

const ErrorRoute = () => {
	return (
		<>
			<Route path="/404" component={FourZeroFour} />
		</>
	);
};

export default ErrorRoute;
