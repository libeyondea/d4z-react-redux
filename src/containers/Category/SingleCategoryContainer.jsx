import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import PostCard from '../../components/PostCard/PostCard';
import { Container } from '../../components/Styled/Wapper';
import { DivSpinner } from '../../components/Styled/Spinners';
import { TagHeader, H1Tag, PTag } from '../../components/Styled/TagCard';
import { PostFeed } from '../../components/Styled/PostCard';
import { singleCategoryThunk, singleCategoryResetedThunk } from '../../thunks/categoryThunk';

const mapStateToProps = (state) => ({
	singleCategory: state.categories.singleCategory,
	login: state.auth.login
});
const mapDispatchToProps = {
	singleCategoryThunk,
	singleCategoryResetedThunk
};

const SingleCategoryContainer = ({ singleCategoryThunk, singleCategoryResetedThunk, singleCategory }) => {
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
				<DivSpinner />
			) : (
				<>
					{singleCategory.isError ? (
						<div>{singleCategory.errorMessage}</div>
					) : (
						<>
							<TagHeader>
								{singleCategory.category.title && <H1Tag>{singleCategory.category.title}</H1Tag>}
								{singleCategory.category.content && <PTag>{singleCategory.category.content}</PTag>}
							</TagHeader>
							{isEmpty(singleCategory.category.post) ? (
								<div>No posts</div>
							) : (
								<PostFeed>
									{singleCategory.category.post.map((node) => (
										<PostCard key={node.id} post={node} />
									))}
								</PostFeed>
							)}
						</>
					)}
				</>
			)}
		</Container>
	);
};

SingleCategoryContainer.propTypes = {
	singlePostThunk: PropTypes.func.isRequired,
	deletePostThunk: PropTypes.func.isRequired,
	singlePostResetedThunk: PropTypes.func.isRequired,
	deletePost: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired,
	singlePost: PropTypes.shape({
		post: PropTypes.object.isRequired
	}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategoryContainer);
