import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import parse from 'html-react-parser';
import MainLayout from '../../layouts/MainLayout';
import { singlePostThunk, deletePostThunk } from '../../thunks/postThunk';
import TitlePostLoading from '../../components/Loading/TitlePostLoading';
import ContentPostLoading from '../../components/Loading/ContentPostLoading';
import Comment from '../../components/Comment/Comment';

const propTypes = {
	singlePostThunk: PropTypes.func.isRequired,
	deletePostThunk: PropTypes.func.isRequired,
	singlePost: PropTypes.object.isRequired,
	deletePost: PropTypes.object.isRequired,
	log: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	singlePost: state.singlePost,
	deletePost: state.deletePost,
	log: state.log
});
const mapDispatchToProps = {
	singlePostThunk,
	deletePostThunk
};
const SinglePost = (props) => {
	const { singlePostThunk, deletePostThunk, singlePost, deletePost, log } = props;
	const { slug } = useParams();
	const history = useHistory();
	useEffect(() => {
		singlePostThunk(slug);
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
	const DeleteEditButton = (
		<div className="clearfix mb-4 mt-3">
			<form onSubmit={handleSubmit}>
				<Link className="btn btn-primary float-right" to={`/edit-post/${singlePost.posts.slug}`}>
					Edit Post
				</Link>
				{deletePost.loading ? (
					<button type="submit" className="btn btn-danger float-right mr-3" disabled>
						<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
						Loading...
					</button>
				) : (
					<button type="submit" className="btn btn-danger float-right mr-3">
						Delete Post
					</button>
				)}
			</form>
		</div>
	);
	return (
		<MainLayout>
			<header
				className="masthead"
				style={
					singlePost.loading ? { backgroundColor: '#343a40' } : { backgroundImage: 'url("/assets/img/react.jpg")' }
				}
			>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							{singlePost.loading ? (
								<TitlePostLoading />
							) : (
								<div className="post-heading">
									<h1>{singlePost.posts.title}</h1>
									<h2 className="subheading">{singlePost.posts.summary}</h2>
									<span className="meta">
										Posted by <a href="!#">{singlePost.posts.user.user_name}</a> on {singlePost.posts.created_at}
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
						<div className="col-lg-8 col-md-10 mx-auto">
							{singlePost.loading ? (
								<ContentPostLoading />
							) : (
								<div className="all-post-content border-bottom mb-3">
									<div className="post-content">{parse(singlePost.posts.content)}</div>
									{(log.user.role_id === 1 || singlePost.posts.user.id === log.user.id) && DeleteEditButton}
								</div>
							)}
							<Comment />
						</div>
					</div>
				</div>
			</article>
		</MainLayout>
	);
};

SinglePost.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
