import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import Pagination from '../Pagination/Pagination';
import isEmpty from '../../helpers/isEmpty';

const pageContext = {
	pageNumber: 0,
	humanPageNumber: 1,
	skip: 0,
	limit: 5,
	numberOfPages: 666,
	previousPagePath: '1',
	nextPagePath: '2'
};
const ListPostCard = ({ fetchPostThunk, fetchPostResetedThunk, fetchPost }) => {
	useEffect(() => {
		fetchPostThunk();
		return () => {
			fetchPostResetedThunk();
		};
	}, [fetchPostResetedThunk, fetchPostThunk]);
	return (
		<div className="container">
			{fetchPost.isLoading || isEmpty(fetchPost.post) ? (
				'Loading.................'
			) : (
				<>
					<section className="post-feed">
						{fetchPost.post.map((node) => (
							<PostCard key={node.id} post={node} />
						))}
					</section>
					<Pagination pageContext={pageContext} />
				</>
			)}
		</div>
	);
};

ListPostCard.propTypes = {
	fetchPost: PropTypes.shape({
		post: PropTypes.array
	}).isRequired
};

export default ListPostCard;
