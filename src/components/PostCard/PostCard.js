import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
	const readingTime = '666 min read';
	return (
		<Link to={`/posts/${post.id}/${post.slug}`} className="post-card">
			<header className="post-card-header">
				{post.image && (
					<div
						className="post-card-image"
						style={{
							backgroundImage: `url(${post.image})`
						}}
					></div>
				)}
				{post.tag && (
					<div className="post-card-tags">
						{post.tag.map((item) => (
							<span key={item.id}>{item.title} </span>
						))}
					</div>
				)}
				{post.featured && <span>Featured</span>}
				<h2 className="post-card-title">{post.title}</h2>
			</header>
			<section className="post-card-excerpt">{post.summary}</section>
			<footer className="post-card-footer">
				<div className="post-card-footer-left">
					<div className="post-card-avatar">
						{post.user.image ? (
							<img className="author-profile-image" src={post.user.image} alt={post.user.user_name} />
						) : (
							<img className="default-avatar" src="/images/icons/avatar.svg" alt={post.user.user_name} />
						)}
					</div>
					<span>{post.user.user_name}</span>
				</div>
				<div className="post-card-footer-right">
					<div>{readingTime}</div>
				</div>
			</footer>
		</Link>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string,
		featured: PropTypes.bool,
		tag: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				title: PropTypes.string
			})
		),
		summary: PropTypes.string.isRequired,
		user: PropTypes.shape({
			user_name: PropTypes.string.isRequired,
			image: PropTypes.string
		}).isRequired
	}).isRequired
};

export default PostCard;
