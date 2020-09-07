import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <div className="post-preview border-bottom mb-3">
            <Link to={`/posts/${post.slug}`}>
                <h2 className="post-title">
                    {post.title}
                </h2>
                <h3 className="post-subtitle">
                    {post.summary}
                </h3>
            </Link>
            <p className="post-meta">Posted by <a href="!#">{post.user_name}</a> on {post.created_at}</p>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        summary: PropTypes.string,
        created_at: PropTypes.string,
        user_id: PropTypes.number
    })
}

export default Post