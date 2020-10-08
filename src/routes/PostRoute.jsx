import React from 'react';
import { Route } from 'react-router-dom';
import AuthRouteLogT from '../guards/AuthRouteLogT';
import CreatePost from '../pages/Post/CreatePost';
import SinglePost from '../pages/Post/SinglePost';
import EditPost from '../pages/Post/EditPost';

const Routes = () => {
	return (
		<>
			<AuthRouteLogT exact path="/posts/create" component={CreatePost} />
			<Route exact path="/posts/:id/:slug" component={SinglePost} />
			<AuthRouteLogT exact path="/posts/:id/:slug/edit" component={EditPost} />
		</>
	);
};

export default Routes;
