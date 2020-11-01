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
const DetailPostCard = ({ singleTagThunk, singleTagResetedThunk, singleTag }) => {
	const { id } = useParams();
	useEffect(() => {
		singleTagThunk(id);
		return () => {
			singleTagResetedThunk();
		};
	}, [id, singleTagResetedThunk, singleTagThunk]);
	return (
		<Container>
			{singleTag.isLoading ? (
				'Loading...........'
			) : (
				<>
					<TagHeader>
						<H1Tag>{singleTag.tag.title}</H1Tag>
						<PTag>{singleTag.tag.content}</PTag>
					</TagHeader>
					{isEmpty(singleTag.tag.post) ? (
						'Empty................'
					) : (
						<PostFeed>
							{singleTag.tag.post.map((node) => (
								<PostCard key={node.id} post={node} />
							))}
						</PostFeed>
					)}
				</>
			)}
		</Container>
	);
};

DetailPostCard.propTypes = {
	singlePostThunk: PropTypes.func.isRequired,
	deletePostThunk: PropTypes.func.isRequired,
	singlePostResetedThunk: PropTypes.func.isRequired,
	deletePost: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired,
	singlePost: PropTypes.shape({
		post: PropTypes.object.isRequired
	}).isRequired
};

export default DetailPostCard;
