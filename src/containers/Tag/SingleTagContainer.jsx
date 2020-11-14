import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import PostCard from '../../components/PostCard/PostCard';
import { Container } from '../../components/Styled/Wapper';
import { DivSpinner } from '../../components/Styled/Spinners';
import { TagHeader, H1Tag, PTag } from '../../components/Styled/TagCard';
import { PostFeed } from '../../components/Styled/PostCard';
import { singleTagThunk, singleTagResetedThunk } from '../../thunks/tagThunk';

const mapStateToProps = (state) => ({
	singleTag: state.tags.singleTag,
	login: state.auth.login
});
const mapDispatchToProps = {
	singleTagThunk,
	singleTagResetedThunk
};
const SingleTagContainer = ({ singleTagThunk, singleTagResetedThunk, singleTag }) => {
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
				<DivSpinner />
			) : (
				<>
					{singleTag.isError ? (
						<div>{singleTag.errorMessage}</div>
					) : (
						<>
							<TagHeader>
								{singleTag.tag.title && <H1Tag>{singleTag.tag.title}</H1Tag>}
								{singleTag.tag.content && <PTag>{singleTag.tag.content}</PTag>}
							</TagHeader>
							{isEmpty(singleTag.tag.post) ? (
								<div>No posts</div>
							) : (
								<PostFeed>
									{singleTag.tag.post.map((node) => (
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

SingleTagContainer.propTypes = {
	singlePostThunk: PropTypes.func.isRequired,
	deletePostThunk: PropTypes.func.isRequired,
	singlePostResetedThunk: PropTypes.func.isRequired,
	deletePost: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired,
	singlePost: PropTypes.shape({
		post: PropTypes.object.isRequired
	}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTagContainer);
