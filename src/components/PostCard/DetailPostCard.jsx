import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import isEmpty from '../../helpers/isEmpty';
import { LinkBtnType, ButtonBtnType } from '../Styled/Button';
import { Container } from '../Styled/Wapper';
import {
	Articlecontent,
	FigurePostFeatureImage,
	ImgPostFeatureImage,
	SectionPostFullContent,
	H1ContentTitle,
	SectionContentBody,
	DivBtnEditDel
} from '../Styled/PostCard';

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
		<Container>
			{singlePost.isLoading || isEmpty(singlePost.post) ? (
				'Loading...........'
			) : (
				<>
					<Helmet>
						<title>{singlePost.post.title} | De4th Zone</title>
						<meta name="description" content={singlePost.post.summary || singlePost.post.meta_description} />
						<meta property="og:title" content={singlePost.post.title} />
						<meta property="og:description" content={singlePost.post.summary || singlePost.post.meta_description} />
					</Helmet>
					<Articlecontent>
						{singlePost.post.image && (
							<FigurePostFeatureImage>
								<ImgPostFeatureImage src={singlePost.post.image} alt={singlePost.post.title} />
							</FigurePostFeatureImage>
						)}
						<SectionPostFullContent>
							<H1ContentTitle>{singlePost.post.title}</H1ContentTitle>
							<SectionContentBody dangerouslySetInnerHTML={{ __html: singlePost.post.content }} />
						</SectionPostFullContent>
						{(login.user.role === 'admin' || singlePost.post.user.id === login.user.id) && (
							<DivBtnEditDel>
								<LinkBtnType
									$typeBtn="primary"
									$fRight
									to={`/posts/${singlePost.post.id}/${singlePost.post.slug}/edit`}
								>
									Edit Post
								</LinkBtnType>
								{deletePost.isLoading ? (
									<ButtonBtnType $typeBtn="danger" mRight="0.5rem" $fRight type="submit" disabled>
										Loading...
									</ButtonBtnType>
								) : (
									<ButtonBtnType $typeBtn="danger" mRight="0.5rem" $fRight type="submit" onClick={handleDeleteSubmit}>
										Delete Post
									</ButtonBtnType>
								)}
							</DivBtnEditDel>
						)}
					</Articlecontent>
				</>
			)}
		</Container>
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
