import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const DivContainer = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 4vw;
`;
export const Articlecontent = styled.article`
	margin: 0 auto;
	font-size: 2rem;
	line-height: 1.7em;
	@media (max-width: 500px) {
		font-size: 1.8rem;
	}
`;
export const FigurePostFeatureImage = styled.figure``;
export const ImgPostFeatureImage = styled.img`
	${FigurePostFeatureImage} & {
		margin: 0 0 3vw;
		width: 100%;
		height: 500px;
		object-fit: cover;
	}
`;
export const SectionPostFullContent = styled.section`
	max-width: 720px;
	margin: 0 auto;
	background: #fff;
`;
export const H1ContentTitle = styled.h1`
	margin: 0 0 0.8em;
	font-size: 5rem;
	@media (max-width: 500px) {
		margin: 0.8em 0;
		font-size: 3.4rem;
	}
`;
export const SectionContentBody = styled.section`
	display: flex;
	flex-direction: column;
	font-family: var(--font-serif);
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		font-family: var(--font-sans-serif);
	}
	& h1 {
		margin: 1em 0 0.5em 0;
		font-size: 3.4rem;
		font-weight: 700;
	}
	@media (max-width: 500px) {
		& h1 {
			font-size: 2.8rem;
		}
	}
	& h2 {
		margin: 0.8em 0 0.4em 0;
		font-size: 3.2rem;
		font-weight: 700;
	}
	@media (max-width: 500px) {
		& h2 {
			font-size: 2.6rem;
		}
	}
	& h3 {
		margin: 0.5em 0 0.2em 0;
		font-size: 2.8rem;
		font-weight: 700;
	}
	@media (max-width: 500px) {
		& h3 {
			font-size: 2.2rem;
		}
	}
	& h4 {
		margin: 0.5em 0 0.2em 0;
		font-size: 2.4rem;
		font-weight: 700;
	}
	@media (max-width: 500px) {
		& h4 {
			font-size: 2.2rem;
		}
	}
	& h5 {
		display: block;
		margin: 0.5em 0;
		padding: 1em 0 1.5em;
		border: 0;
		font-family: Georgia, serif;
		color: var(--color-primary);
		font-style: italic;
		font-size: 3.2rem;
		line-height: 1.35em;
		text-align: center;
	}
	& h6 {
		margin: 0.5em 0 0.2em 0;
		font-size: 2rem;
		font-weight: 700;
	}
	& figure {
		margin: 0.4em 0 1.6em;
		font-size: 2.8rem;
		font-weight: 700;
	}
	& pre {
		margin: 0.4em 0 1.8em;
		font-size: 1.6rem;
		line-height: 1.4em;
		white-space: pre-wrap;
		padding: 20px;
		background: var(--color-base);
		color: #fff;
		border-radius: 12px;
	}
`;
export const CssBtn = css`
	margin-top: 0.25rem;
	margin-bottom: 0.25rem;
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.75rem 1.5rem;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
	&:hover {
		text-decoration: none;
	}
	&:focus {
		outline: 0;
		box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
	}
`;
export const CssBtnType = css`
	color: #fff;
	${({ typeBtn }) =>
		(typeBtn === 'primary' &&
			`
		background-color: #0d6efd;
		border-color: #0d6efd
	`) ||
		(typeBtn === 'danger' &&
			`
		background-color: #dc3545;
		border-color: #dc3545;
	`)}
	&:hover {
		color: #fff;
		${({ typeBtn }) =>
			(typeBtn === 'primary' &&
				`
			background-color: #025ce2;
			border-color: #0257d5
		`) ||
			(typeBtn === 'danger' &&
				`
			background-color: #c82333;
			border-color: #bd2130;
		`)}
	}
	&:focus {
		color: #fff;
		${({ typeBtn }) =>
			(typeBtn === 'primary' &&
				`
			background-color: #025ce2;
			border-color: #0257d5;
			box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
		`) ||
			(typeBtn === 'danger' &&
				`
			background-color:  #c82333;
			border-color:  #bd2130;
			box-shadow: 0 0 0 0.2rem rgba(225,83,97,.5);
		`)}
	}
	&:active,
	&.active {
		color: #fff;
		${({ typeBtn }) =>
			(typeBtn === 'primary' &&
				`
				background-color: #025ce2;
				border-color: #0257d5
		`) ||
			(typeBtn === 'danger' &&
				`
				background-color: #c82333;
				border-color: #bd2130;
		`)}
	}
	&:active:focus,
	&.active:focus {
		${({ typeBtn }) =>
			(typeBtn === 'primary' &&
				`
				box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
		`) ||
			(typeBtn === 'danger' &&
				`
				box-shadow: 0 0 0 0.2rem rgba(225,83,97,.5);
		`)}
	}
	&:disabled,
	&.disabled {
		color: #fff;
		${({ typeBtn }) =>
			(typeBtn === 'primary' &&
				`
				background-color: #0d6efd;
				border-color: #0d6efd;
		`) ||
			(typeBtn === 'danger' &&
				`
				background-color: #dc3545;
				border-color:  #dc3545;
		`)}
	}
`;
export const CssFloat = css`
	${({ fRight, fLeft }) =>
		(fRight &&
			`
			float: right;
	`) ||
		(fLeft &&
			`
			float: left;
	`)}
`;
export const LinkBtnType = styled(Link)`
	${CssBtn}
	${CssBtnType}
	${CssFloat}
	margin-right: ${({ mRight }) => mRight || 0};
`;
export const ButtonBtnType = styled.button`
	${CssBtn}
	${CssBtnType}
	${CssFloat}
	margin-right: ${({ mRight }) => mRight || 0};
`;
export const DivBtnEditDel = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

export const PostFeed = styled.section`
	display: grid;
	justify-content: space-between;
	grid-gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	@media (max-width: 980px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
	@media (max-width: 680px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;

export const LinkPostCard = styled(Link)`
	color: inherit;
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
`;
export const HeaderPostCard = styled.header``;
export const DivPostCardImage = styled.div`
	margin: 0 0 10px 0;
	width: auto;
	height: 200px;
	background: var(--color-secondary) no-repeat center center;
	background-size: cover;
`;
export const DivPostCardTags = styled.div`
	margin: 0 0 5px 0;
	font-size: 1.4rem;
	line-height: 1.15em;
	color: var(--color-secondary);
`;
export const H2PostCardTitle = styled.h2`
	margin: 0 0 10px 0;
	padding: 0;
`;
export const SectionPostCardexcerpt = styled.section`
	font-size: 1.6rem;
	line-height: 1.55em;
`;
export const FooterPostCardfooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0 0 0;
	color: var(--color-secondary);
`;
export const DivPostCardFooterLeft = styled.div`
	display: flex;
	align-items: center;
`;
export const DivPostCardAvatar = styled.div`
	width: 30px;
	height: 30px;
	margin: 0 7px 0 0;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ImgAuthorProfileImage = styled.img`
	${DivPostCardAvatar} & {
		display: block;
		width: 100%;
		background: var(--color-secondary);
		border-radius: 100%;
		object-fit: cover;
	}
`;
export const ImgDefaultAvatar = styled.img`
	${DivPostCardAvatar} & {
		width: 26px;
	}
`;
export const DivPostCardFooterRight = styled.div`
	display: flex;
	flex-direction: column;
`;
export const DivFilter = styled.div`
	margin-bottom: 30px;
	&::after {
		content: '';
		clear: both;
		display: table;
	}
`;
export const DivSearch = styled.div`
	float: left;
`;
export const DivSortBy = styled.div`
	float: right;
`;
export const InputSearch = styled.input`
	margin-bottom: 30px;
	display: block;
	width: 500px;
	line-height: 1.5;
	color: rgb(73, 80, 87);
	background-color: rgb(255, 255, 255);
	background-clip: padding-box;
	padding: 1rem 1.25rem;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(206, 212, 218);
	border-image: initial;
	border-radius: 0.75rem;
	transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
	@media (max-width: 980px) {
		width: 420px;
	}
	@media (max-width: 680px) {
		width: 320px;
	}
	&:focus {
		color: #495057;
		background-color: #fff;
		border-color: #80bdff;
		outline: 0;
		box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
	}
`;

export const SelectSortBy = styled.select`
	width: 200px;
	display: block;
	padding: 1rem 1.25rem;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 0.75rem;
	-webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	@media (max-width: 980px) {
		width: 180px;
	}
	@media (max-width: 680px) {
		width: 150px;
	}
	&:focus {
		color: #495057;
		background-color: #fff;
		border-color: #80bdff;
		outline: 0;
		box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
	}
`;
