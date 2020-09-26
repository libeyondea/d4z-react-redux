import React from 'react';
import { Link } from 'react-router-dom';

const EmptyFetchPost = () => {
	return (
		<div className="post-preview border-bottom mb-3">
			<Link to="/">
				<h2 className="post-title">De4th Zone</h2>
				<h3 className="post-subtitle">De4th Zone</h3>
			</Link>
			<p className="post-meta">
				Posted by <a href="#!">de4thzone</a> on 6666-06-06 06:06:06
			</p>
		</div>
	);
};

export default EmptyFetchPost;
