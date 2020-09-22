import React from 'react';
import { Route } from 'react-router-dom';
import AuthRouteLogT from '../guards/AuthRouteLogT';
import CreatePost from '../pages/Post/CreatePost';
import SinglePost from '../pages/Post/SinglePost';
import EditPost from '../pages/Post/EditPost';

const Routes = () => {
	return (
		<>
			<AuthRouteLogT path="/create-post" component={CreatePost} />
			<Route path="/posts/:slug" component={SinglePost} />
			<AuthRouteLogT path="/edit-post/:slug" component={EditPost} />
		</>
	);
};
export default Routes;
