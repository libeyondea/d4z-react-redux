import React from 'react';
import { Route } from 'react-router-dom';
import FetchTag from '../pages/Tag/FetchTag';
import SingleTag from '../pages/Tag/SingleTag';

const TagRoute = () => {
	return (
		<>
			<Route exact path="/tags" component={FetchTag} />
			<Route exact path="/tags/:id/:slug" component={SingleTag} />
		</>
	);
};

export default TagRoute;
