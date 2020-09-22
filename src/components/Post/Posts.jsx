import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			slug: PropTypes.string,
			title: PropTypes.string,
			summary: PropTypes.string,
			created_at: PropTypes.string,
			user_name: PropTypes.string
		})
	)
};
const Posts = (props) => {
	const { posts } = props;
	return posts.map((val) => <Post key={val.id} post={val} />);
};
Posts.propTypes = propTypes;
export default Posts;
