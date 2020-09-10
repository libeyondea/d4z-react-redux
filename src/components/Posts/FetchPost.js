import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPostAction } from "../../actions/postAction";
import LoadingFetchPost from '../Loading/LoadingFetchPost';
import EmptyFetchPost from './EmptyFetchPost';
import Posts from './Posts';

const propTypes = {
	fetchPostAction: PropTypes.func.isRequired,
	fetchPost: PropTypes.shape({
        posts: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string,
				summary: PropTypes.string,
				created_at: PropTypes.string,
				user_id: PropTypes.number
			})
		)
	}).isRequired
};

const FetchPost = ({ fetchPostAction, fetchPost }) => {

	useEffect(() => {
		fetchPostAction();
	}, [fetchPostAction])

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						{fetchPost.loading ? <LoadingFetchPost /> :
							<div>
								{!fetchPost.posts.length ? <EmptyFetchPost /> :
									<div>
										<Posts posts={fetchPost.posts} />
										<div className="clearfix">
											<a className="btn btn-primary float-right" href="!#">Older Posts →</a>
										</div>
									</div>
								}
							</div>
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	fetchPost: state.fetchPost
})

FetchPost.propTypes = propTypes;

export default connect(mapStateToProps, { fetchPostAction })(FetchPost)