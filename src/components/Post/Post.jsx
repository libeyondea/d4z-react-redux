import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
	post: PropTypes.shape({
		slug: PropTypes.string,
		title: PropTypes.string,
		summary: PropTypes.string,
		created_at: PropTypes.string,
		user_name: PropTypes.string
	})
};
const Post = (props) => {
	const { post } = props;
	return (
		<div className="post-preview border-bottom mb-3">
			<Link to={`/posts/${post.slug}`}>
				<h2 className="post-title">{post.title}</h2>
				<h3 className="post-subtitle">{post.summary}</h3>
			</Link>
			<p className="post-meta">
				Posted by <a href="#!">{post.user.user_name}</a> on {post.created_at}
			</p>
		</div>
	);
};

Post.propTypes = propTypes;

export default Post;
