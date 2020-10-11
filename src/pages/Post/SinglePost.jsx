import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import isEmpty from '../../helpers/isEmpty';
// Components
import Layout from '../../components/Layout/Layout';
// Thunk
import { singlePostThunk, deletePostThunk, singlePostResetedThunk } from '../../thunks/postThunk';
// Meta
//import { MetaData } from '../../components/Meta';

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
const Post = ({
	singlePostThunk,
	deletePostThunk,
	singlePostResetedThunk,
	singlePost,
	deletePost,
	login,
	location
}) => {
	const { id } = useParams();
	const history = useHistory();
	useEffect(() => {
		singlePostThunk(id);
		return () => {
			singlePostResetedThunk();
		};
	}, [id, singlePostResetedThunk, singlePostThunk]);
	return (
		<>
			{/*<MetaData data={data} location={location} type="article" />*/}
			<Layout>
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
						</article>
					)}
				</div>
			</Layout>
		</>
	);
};

Post.propTypes = {
	singlePostThunk: PropTypes.func.isRequired,
	deletePostThunk: PropTypes.func.isRequired,
	singlePostResetedThunk: PropTypes.func.isRequired,
	deletePost: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired,
	singlePost: PropTypes.shape({
		post: PropTypes.object.isRequired
	}).isRequired,
	location: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
