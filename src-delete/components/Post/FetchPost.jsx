import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import { fetchPostThunk, fetchPostResetedThunk } from '../../thunks/postThunk';
import FetchPostLoading from '../Loading/FetchPostLoading';

const propTypes = {
	fetchPostThunk: PropTypes.func.isRequired,
	fetchPostResetedThunk: PropTypes.func.isRequired,
	fetchPost: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	fetchPost: state.posts.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk,
	fetchPostResetedThunk
};
const FetchPost = (props) => {
	const { fetchPostThunk, fetchPostResetedThunk, fetchPost } = props;
	useEffect(() => {
		fetchPostThunk();
		return () => {
			fetchPostResetedThunk();
		};
	}, [fetchPostResetedThunk, fetchPostThunk]);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12">
					{fetchPost.isLoading || isEmpty(fetchPost.post) ? (
						<FetchPostLoading />
					) : (
						<div>
							{fetchPost.post.map((item) => (
								<div className="post-preview border-bottom mb-3" key={item.id}>
									<Link to={`/posts/${item.id}/${item.slug}`}>
										<h2 className="post-title">{item.title}</h2>
										<h3 className="post-subtitle">{item.summary}</h3>
									</Link>
									<p className="post-meta">
										Posted by <a href="#!">{item.user.user_name}</a> on {item.created_at}
									</p>
								</div>
							))}
							<div className="clearfix">
								<Link className="btn btn-primary float-right" to="/">
									Next Page →
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

FetchPost.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(FetchPost);
