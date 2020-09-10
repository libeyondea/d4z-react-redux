import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const Posts = ({ posts }) => {

    return (
        posts.map((val) => <Post key={val.id} post={val} />)
    )
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            summary: PropTypes.string,
            created_at: PropTypes.string,
            user_id: PropTypes.number
        })
    )
}

export default Posts