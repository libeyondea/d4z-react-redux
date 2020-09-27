import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import { fetchPostThunk } from '../../thunks/postThunk';
import Posts from './Posts';
import EmptyFetchPost from './EmptyFetchPost';
import FetchPostLoading from '../Loading/FetchPostLoading';

const propTypes = {
	fetchPostThunk: PropTypes.func.isRequired,
	fetchPost: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	fetchPost: state.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk
};
const FetchPost = (props) => {
	const { fetchPostThunk, fetchPost } = props;
	useEffect(() => {
		fetchPostThunk();
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-10 mx-auto">
					{fetchPost.loading ? (
						<FetchPostLoading />
					) : (
						<div>
							{isEmpty(fetchPost.posts) ? (
								<EmptyFetchPost />
							) : (
								<>
									<Posts posts={fetchPost.posts} />
									<div className="clearfix">
										<Link className="btn btn-primary float-right" to="/">
											Next Page →
										</Link>
									</div>
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

FetchPost.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(FetchPost);
