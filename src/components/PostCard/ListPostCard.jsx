import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import Pagination from '../Pagination/Pagination';
import isEmpty from '../../helpers/isEmpty';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 4vw;
`;
const PostFeed = styled.section`
	display: grid;
	justify-content: space-between;
	grid-gap: 30px;
	grid-template-columns: 1fr 1fr 1fr;
	@media (max-width: 980px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`;

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
		<Container>
			{fetchPost.isLoading || isEmpty(fetchPost.post) ? (
				'Loading................'
			) : (
				<>
					<PostFeed>
						{fetchPost.post.map((node) => (
							<PostCard key={node.id} post={node} />
						))}
					</PostFeed>
					<Pagination pageContext={pageContext} />
				</>
			)}
		</Container>
	);
};

ListPostCard.propTypes = {
	fetchPost: PropTypes.shape({
		post: PropTypes.array
	}).isRequired
};

export default ListPostCard;
