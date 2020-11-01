import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import Pagination from '../Pagination/Pagination';
import PostCard from '../PostCard/PostCard';
import { Container } from '../Styled/Wapper';
import { TagHeader, H1Tag, PTag } from '../Styled/TagCard';
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
const DetailCategoryCard = ({ singleCategoryThunk, singleCategoryResetedThunk, singleCategory }) => {
	const { id } = useParams();
	useEffect(() => {
		singleCategoryThunk(id);
		return () => {
			singleCategoryResetedThunk();
		};
	}, [id, singleCategoryResetedThunk, singleCategoryThunk]);
	return (
		<Container>
			{singleCategory.isLoading ? (
				'Loading...........'
			) : (
				<>
					<TagHeader>
						<H1Tag>{singleCategory.category.title}</H1Tag>
						<PTag>{singleCategory.category.content}</PTag>
					</TagHeader>
					{isEmpty(singleCategory.category.post) ? (
						'Empty................'
					) : (
						<PostFeed>
							{singleCategory.category.post.map((node) => (
								<PostCard key={node.id} post={node} />
							))}
						</PostFeed>
					)}
				</>
			)}
		</Container>
	);
};

DetailCategoryCard.propTypes = {
	singlePostThunk: PropTypes.func.isRequired,
	deletePostThunk: PropTypes.func.isRequired,
	singlePostResetedThunk: PropTypes.func.isRequired,
	deletePost: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired,
	singlePost: PropTypes.shape({
		post: PropTypes.object.isRequired
	}).isRequired
};

export default DetailCategoryCard;
