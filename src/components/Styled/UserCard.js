import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PostFeed } from './PostCard';

export const UserHeader = styled.header`
	max-width: 690px;
	margin: 0 0 4vw;
	@media (max-width: 500px) {
		border-bottom: var(--color-bg) 1px solid;
		padding-bottom: 4vw;
	}
`;
export const H1User = styled.h1`
	${UserHeader} & {
		margin: 0 0 1rem 0;
	}
`;
export const PUser = styled.p`
	${UserHeader} & {
		margin: 0;
		color: var(--color-secondary);
		font-size: 2.2rem;
		line-height: 1.3em;
	}
	@media (max-width: 500px) {
		${UserHeader} & {
			font-size: 1.7rem;
		}
	}
`;
export const SectionUserFeed = styled(PostFeed)``;

export const DivUserCard = styled.div`
	overflow: hidden;
`;
export const DivUserGravatar = styled.div`
	${DivUserCard} & {
		float: left;
		width: 66px;
		height: 66px;
	}
`;
export const DivUserGravatarWrapper = styled.div`
	${DivUserCard} & img {
		border-radius: 6px;
	}
`;

export const DivUserDetails = styled.div`
	${DivUserCard} & {
		margin-left: 9px;
		width: calc(100% - 75px);
		float: left;
	}
	${DivUserCard} & a {
		display: inline-block;
	}
	${DivUserCard} & a:hover {
		text-decoration: none;
	}
	${DivUserCard} & h2 {
		margin: 0;
	}
`;
export const DivUserTags = styled.div`
	${DivUserCard} & {
		clear: both;
		margin-left: 75px;
	}
	${DivUserCard} & a:hover {
		text-decoration: none;
	}
`;
export const SpanUserLocation = styled.span`
	${DivUserCard} ${DivUserDetails} & {
		margin-bottom: 2px;
		display: block;
	}
`;
export const DivUserCountPost = styled.div`
	${DivUserCard} ${DivUserDetails} & {
		display: block;
		margin-bottom: 4px;
	}
	${DivUserCard} ${DivUserDetails} & > span {
		font-weight: bold;
	}
`;

// Old styled
export const AuthorHeader = styled.header`
	display: flex;
	justify-content: space-between;
	margin: 0 0 4vw;
	& h1 {
		margin: 0 0 1rem 0;
	}
	& p {
		margin: 0;
		color: var(--color-secondary);
		font-size: 2.2rem;
		line-height: 1.3em;
	}
	@media (max-width: 500px) {
		border-bottom: var(--color-bg) 1px solid;
		padding-bottom: 4vw;
		& p {
			font-size: 1.7rem;
		}
	}
`;
export const DivAuthorHeaderContent = styled.div``;
export const LinkAuthorName = styled(Link)`
	color: var(--color-primary);
	&:hover,
	&:active {
		text-decoration: none;
		color: var(--color-primary-500);
	}
`;
export const DivAuthorHeaderMeta = styled.div`
	display: flex;
	margin: 1rem 0 0 0;
`;
export const AAuthorHeaderItem = styled(LinkAuthorName).attrs({
	as: 'a'
})`
	display: block;
	padding: 2px 10px;
	&:first-child {
		padding-left: 0;
	}
`;
export const DivAuthorHeaderImage = styled.div`
	flex: 0 0 auto;
	margin: 0 0 0 4vw;
	height: 120px;
	width: 120px;
	border-radius: 100%;
	overflow: hidden;
	@media (max-width: 500px) {
		height: 80px;
		width: 80px;
	}
`;
