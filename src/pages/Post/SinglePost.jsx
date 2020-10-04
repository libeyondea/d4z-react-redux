import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import parse from 'html-react-parser';
import isEmpty from '../../helpers/isEmpty';
import MainLayout from '../../layouts/MainLayout';
import { singlePostThunk, deletePostThunk, singlePostResetedThunk } from '../../thunks/postThunk';
import TitlePostLoading from '../../components/Loading/TitlePostLoading';
import ContentPostLoading from '../../components/Loading/ContentPostLoading';
import Comment from '../../components/Comment/Comment';

const propTypes = {
	singlePostThunk: PropTypes.func.isRequired,
	deletePostThunk: PropTypes.func.isRequired,
	singlePostResetedThunk: PropTypes.func.isRequired,
	singlePost: PropTypes.object.isRequired,
	deletePost: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	singlePost: state.posts.singlePost,
	deletePost: state.posts.deletePost,
	login: state.auth.login
});
const mapDispatchToProps = {
	singlePostThunk,
	deletePostThunk,
	singlePostResetedThunk
};
const SinglePost = (props) => {
	const { singlePostThunk, deletePostThunk, singlePostResetedThunk, singlePost, deletePost, login } = props;
	const { slug } = useParams();
	const history = useHistory();
	useEffect(() => {
		singlePostThunk(slug);
		return () => {
			singlePostResetedThunk();
		};
	}, []);
	const handleSubmit = (event) => {
		event.preventDefault();
		Swal.fire({
			title: 'Do you want to delete?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
			cancelButtonText: 'No'
		}).then((result) => {
			if (result.isConfirmed) {
				deletePostThunk(slug, history);
			}
		});
	};
	return (
		<MainLayout>
			<header
				className="masthead"
				style={
					singlePost.isLoading ? { backgroundColor: '#343a40' } : { backgroundImage: 'url("/assets/img/react.jpg")' }
				}
			>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							{singlePost.isLoading || isEmpty(singlePost.post) ? (
								<TitlePostLoading />
							) : (
								<div className="post-heading">
									<h1>{singlePost.post.title}</h1>
									<h2 className="subheading">{singlePost.post.summary}</h2>
									<span className="meta">
										Posted by <a href="#!">{singlePost.post.user.user_name}</a> on {singlePost.post.created_at}
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>
			<article>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							{singlePost.isLoading || isEmpty(singlePost.post) ? (
								<ContentPostLoading />
							) : (
								<>
									<div className="all-post-content border-bottom mb-3">
										<div className="post-content">{parse(singlePost.post.content)}</div>
										{(login.user.role_id === 1 || singlePost.post.user.id === login.user.id) && (
											<div className="clearfix mb-4 mt-3">
												<form onSubmit={handleSubmit}>
													<Link className="btn btn-primary float-right" to={`/edit-post/${singlePost.post.slug}`}>
														Edit Post
													</Link>
													{deletePost.isLoading ? (
														<button type="submit" className="btn btn-danger float-right mr-3" disabled>
															<span
																className="spinner-border spinner-border-sm mr-1"
																role="status"
																aria-hidden="true"
															/>
															Loading...
														</button>
													) : (
														<button type="submit" className="btn btn-danger float-right mr-3">
															Delete Post
														</button>
													)}
												</form>
											</div>
										)}
									</div>
									<Comment />
								</>
							)}
						</div>
					</div>
				</div>
			</article>
		</MainLayout>
	);
};

SinglePost.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
