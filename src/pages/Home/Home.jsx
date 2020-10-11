import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Check empty
import isEmpty from '../../helpers/isEmpty';
// Meta
//import { MetaData } from '../components/Meta';
// Components
import Layout from '../../components/Layout/Layout';
import PostCard from '../../components/PostCard/PostCard';
import Pagination from '../../components/Pagination/Pagination';
// Thunk
import { fetchPostThunk, fetchPostResetedThunk } from '../../thunks/postThunk';

// fake pagination
const pageContext = {
	pageNumber: 0,
	humanPageNumber: 1,
	skip: 0,
	limit: 5,
	numberOfPages: 666,
	previousPagePath: '1',
	nextPagePath: '2'
};
const mapStateToProps = (state) => ({
	fetchPost: state.posts.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk,
	fetchPostResetedThunk
};
const Home = ({ fetchPostThunk, fetchPostResetedThunk, fetchPost }) => {
	useEffect(() => {
		fetchPostThunk();
		return () => {
			fetchPostResetedThunk();
		};
	}, [fetchPostResetedThunk, fetchPostThunk]);
	return (
		<>
			{/*<MetaData location={location} />*/}
			<Layout isHome={true}>
				<div className="container">
					{fetchPost.isLoading || isEmpty(fetchPost.post) ? (
						'loading....................'
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
			</Layout>
		</>
	);
};

Home.propTypes = {
	fetchPost: PropTypes.shape({
		post: PropTypes.array
	}).isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired,
	pageContext: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
