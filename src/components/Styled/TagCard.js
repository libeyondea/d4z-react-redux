import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	HeaderPostCard,
	H2PostCardTitle,
	SectionPostCardexcerpt,
	FooterPostCardfooter,
	DivPostCardFooterLeft,
	DivPostCardFooterRight,
	PostFeed
} from './PostCard';
import { UserHeader, H1User, PUser } from './UserCard';

export const TagHeader = styled(UserHeader)``;
export const H1Tag = styled(H1User)``;
export const PTag = styled(PUser)``;

export const TagFeed = styled(PostFeed)``;
export const DivTagCard = styled.div`
	border: 1px solid #d6d9dc;
	border-radius: 3px;
	padding: 12px;
`;
export const LinkTagCardTitle = styled(Link)`
	text-decoration: none;
	color: var(--color-primary);
	background-color: #e1ecf4;
	border-color: transparent;
	display: inline-block;
	padding: 0.4em 0.5em;
	line-height: 1;
	white-space: nowrap;
	text-align: center;
	border-width: 1px;
	border-style: solid;
	border-radius: 3px;
	&:hover,
	&active {
		color: var(--color-primary-500);
		text-decoration: none;
	}
`;
export const HeaderTagCard = styled(HeaderPostCard)``;
export const H2TagCardTitle = styled(H2PostCardTitle)``;
export const SectionTagCardexcerpt = styled(SectionPostCardexcerpt)``;
export const FooterTagCardfooter = styled(FooterPostCardfooter)``;
export const DivTagCardFooterLeft = styled(DivPostCardFooterLeft)``;
export const DivTagCardFooterRight = styled(DivPostCardFooterRight)``;
