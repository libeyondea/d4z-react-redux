import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import isEmpty from '../../helpers/isEmpty';

const DetailPostCard = ({
	singlePostThunk,
	deletePostThunk,
	singlePostResetedThunk,
	singlePost,
	deletePost,
	login
}) => {
	const { id } = useParams();
	const history = useHistory();
	useEffect(() => {
		singlePostThunk(id);
		return () => {
			singlePostResetedThunk();
		};
	}, [id, singlePostResetedThunk, singlePostThunk]);
	const handleDeleteSubmit = (event) => {
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
				deletePostThunk(id, history);
			}
		});
	};
	return (
		<div className="container">
			{singlePost.isLoading || isEmpty(singlePost.post) ? (
				'Loading...........'
			) : (
				<article className="content">
					{singlePost.post.image && (
						<figure className="post-feature-image">
							<img src={singlePost.post.image} alt={singlePost.post.title} />
						</figure>
					)}
					<section className="post-full-content">
						<h1 className="content-title">{singlePost.post.title}</h1>
						{/* The main post content */}
						<section
							className="content-body load-external-scripts"
							dangerouslySetInnerHTML={{ __html: singlePost.post.content }}
						/>
					</section>
					{(login.user.role === 'admin' || singlePost.post.user.id === login.user.id) && (
						<div className="clearfix mb-4 mt-3">
							<Link
								className="btn btn-primary float-right"
								to={`/posts/${singlePost.post.id}/${singlePost.post.slug}/edit`}
							>
								Edit Post
							</Link>
							{deletePost.isLoading ? (
								<button type="submit" className="btn btn-danger float-right mr-3" disabled>
									<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
									Loading...
								</button>
							) : (
								<button type="submit" onClick={handleDeleteSubmit} className="btn btn-danger float-right mr-3">
									Delete Post
								</button>
							)}
						</div>
					)}
				</article>
			)}
		</div>
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
