import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PostCard from './PostCard';
import Pagination from '../Pagination/Pagination';
import isEmpty from '../../helpers/isEmpty';
import { Container } from '../Styled/Wapper';
import { PostFeed } from '../Styled/PostCard';

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
			<Helmet>
				<title>Home | De4th Zone</title>
				<meta name="description" content="De4th Zone" />
			</Helmet>
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
