import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkPostCard = styled(Link)`
	color: inherit;
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
`;
const HeaderPostCardHeader = styled.header``;
const DivPostCardImage = styled.div`
	margin: 0 0 10px 0;
	width: auto;
	height: 200px;
	background: var(--color-secondary) no-repeat center center;
	background-size: cover;
`;
const DivPostCardTags = styled.div`
	margin: 0 0 5px 0;
	font-size: 1.4rem;
	line-height: 1.15em;
	color: var(--color-secondary);
`;
const H2PostCardTitle = styled.h2`
	margin: 0 0 10px 0;
	padding: 0;
`;
const SectionPostCardexcerpt = styled.section`
	font-size: 1.6rem;
	line-height: 1.55em;
`;
const FooterPostCardfooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0 0 0;
	color: var(--color-secondary);
`;
const DivPostCardFooterLeft = styled.div`
	display: flex;
	align-items: center;
`;
const DivPostCardAvatar = styled.div`
	width: 30px;
	height: 30px;
	margin: 0 7px 0 0;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ImgAuthorProfileImage = styled.img`
	${DivPostCardAvatar} & {
		display: block;
		width: 100%;
		background: var(--color-secondary);
		border-radius: 100%;
		object-fit: cover;
	}
`;
const ImgDefaultAvatar = styled.img`
	${DivPostCardAvatar} & {
		width: 26px;
	}
`;
const DivPostCardFooterRight = styled.div`
	display: flex;
	flex-direction: column;
`;

const PostCard = ({ post }) => {
	const readingTime = '666 min read';
	return (
		<LinkPostCard to={`/posts/${post.id}/${post.slug}`}>
			<HeaderPostCardHeader>
				{post.image && (
					<DivPostCardImage
						style={{
							backgroundImage: `url(${post.image})`
						}}
					></DivPostCardImage>
				)}
				{post.tag && (
					<DivPostCardTags>
						{post.tag.map((item) => (
							<span key={item.id}>{item.title} </span>
						))}
					</DivPostCardTags>
				)}
				<H2PostCardTitle>{post.title}</H2PostCardTitle>
			</HeaderPostCardHeader>
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
