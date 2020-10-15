import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import {
	LinkPostCard,
	HeaderPostCard,
	DivPostCardImage,
	DivPostCardTags,
	H2PostCardTitle,
	SectionPostCardexcerpt,
	FooterPostCardfooter,
	DivPostCardFooterLeft,
	DivPostCardAvatar,
	ImgAuthorProfileImage,
	ImgDefaultAvatar,
	DivPostCardFooterRight
} from '../Styled/PostCard';

const PostCard = ({ post }) => {
	const readingTime = '666 min read';
	return (
		<LinkPostCard to={`/posts/${post.id}/${post.slug}`}>
			<HeaderPostCard>
				{post.image && (
					<DivPostCardImage
						style={{
							backgroundImage: `url(${post.image})`
						}}
					></DivPostCardImage>
				)}
				{!isEmpty(post.tag) && (
					<DivPostCardTags>
						{post.tag.map((item) => (
							<span key={item.id}>{item.title} </span>
						))}
					</DivPostCardTags>
				)}
				<H2PostCardTitle>{post.title}</H2PostCardTitle>
			</HeaderPostCard>
			<SectionPostCardexcerpt>{post.summary}</SectionPostCardexcerpt>
			<FooterPostCardfooter>
				<DivPostCardFooterLeft>
					<DivPostCardAvatar>
						{post.user.image ? (
							<ImgAuthorProfileImage src={post.user.image} alt={post.user.user_name} />
						) : (
							<ImgDefaultAvatar src="/images/icons/avatar.svg" alt={post.user.user_name} />
						)}
					</DivPostCardAvatar>
					<span>{post.user.user_name}</span>
				</DivPostCardFooterLeft>
				<DivPostCardFooterRight>
					<div>{readingTime}</div>
				</DivPostCardFooterRight>
			</FooterPostCardfooter>
		</LinkPostCard>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string,
		tag: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				title: PropTypes.string
			})
		),
		summary: PropTypes.string.isRequired,
		user: PropTypes.shape({
			user_name: PropTypes.string.isRequired,
			image: PropTypes.string
		}).isRequired
	}).isRequired
};

export default PostCard;
