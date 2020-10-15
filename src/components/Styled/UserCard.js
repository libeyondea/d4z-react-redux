import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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
export const SectionUserFeed = styled.section``;
export const DivUserCard = styled.div``;
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
