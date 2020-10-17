import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './Wapper';

export const DivViewPort = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;
export const DivViewPortTop = styled.div``;
export const HeaderSite = styled.header`
	padding-top: 20px;
	padding-bottom: 20px;
	color: #fff;
	background: var(--color-base);
	background-position: center;
	background-size: cover;
`;
export const DivSiteMast = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const DivSiteMastRight = styled.div`
	display: flex;
	align-items: center;
`;
export const DivSiteMastLeft = styled.div``;
export const ImgSiteNavIcon = styled.img`
	height: 15px;
	margin: -5px 0 0;
`;
export const ImgSiteLogo = styled.img`
	height: 25px;
`;
export const CssSiteNavItem = css`
	display: inline-block;
	padding: 5px 10px;
	color: #fff;
	opacity: 0.7;
	&:hover {
		text-decoration: none;
		opacity: 1;
	}
	${DivSiteMastRight} &:last-child {
		padding-right: 0;
	}
`;
export const ASiteNavItem = styled.a`
	${CssSiteNavItem}
`;
export const LinkSiteNavItem = styled(Link)`
	${CssSiteNavItem}
`;
export const DivDropDown = styled.div`
	position: relative;
	display: inline-block;
`;
export const ADropDownToggleASiteNavItem = styled(ASiteNavItem)`
	${DivDropDown} & {
		/*1*/
	}
	${DivDropDown}:hover & {
		/*2*/
	}
`;
export const DivDropDownMenu = styled.div`
	${DivDropDown} & {
		display: none;
		position: absolute;
		right: 0;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		border-radius: 0.25rem;
	}
	${DivDropDown}:hover & {
		display: block;
	}
`;
export const CssDropDownItem = css`
	${DivDropDown} ${DivDropDownMenu} & {
		color: var(--color-base);
		padding: 10px 20px;
		text-decoration: none;
		display: block;
		border-radius: 0.25rem;
	}
	${DivDropDown} ${DivDropDownMenu} &:hover {
		background-color: #f1f1f1;
	}
`;
export const ADropDownItem = styled.a`
	${CssDropDownItem}
`;
export const LinkDropDownItem = styled(Link)`
	${CssDropDownItem}
`;
export const DivDropdownDivider = styled.div`
	${DivDropDown} & {
		height: 0;
		overflow: hidden;
		border-top: 1px solid #e9ecef;
	}
`;
export const DivSiteBanner = styled.div`
	max-width: 80%;
	margin: 0 auto;
	padding: 10vw 0;
	text-align: center;
`;
export const H1SiteBannerTitle = styled.h1`
	margin: 0;
	padding: 0;
	color: #fff;
	font-size: 4rem;
	line-height: 1.3em;
`;
export const PSiteBannerDesc = styled.p`
	margin: 5px 0 0 0;
	padding: 0;
	font-size: 2.4rem;
	line-height: 1.3em;
	opacity: 0.7;
`;
export const NavSite = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 15px 0 0 0;
`;
export const DivSiteNavLeft = styled.div`
	margin: 0 20px 0 -10px;
`;
export const DivSiteNavRight = styled.div``;
export const LinkSiteNavButton = styled(Link)`
	display: inline-block;
	padding: 5px 10px;
	border: #fff 1px solid;
	color: #fff;
	font-size: 1.3rem;
	line-height: 1em;
	border-radius: var(--radius);
	opacity: 0.7;
	&:hover {
		text-decoration: none;
	}
`;
export const MainSiteMain = styled.main`
	padding: 4vw 0;
`;
export const DivViewportBottom = styled.div``;
export const FooterSite = styled.footer`
	padding: 20px 0 40px 0;
	color: rgba(255, 255, 255, 0.7);
	font-size: 1.3rem;
	background: var(--color-base);
`;
export const DivSiteFootNavContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const DivSiteFootNavLeft = styled.div``;
export const DivSiteFootNavRight = styled.div``;

export const CssSiteFootNavItem = css`
	${DivSiteFootNavContainer} & {
		color: rgba(255, 255, 255, 0.7);
	}
	${DivSiteFootNavContainer} &:hover {
		text-decoration: none;
		color: rgba(255, 255, 255, 1);
	}
	${DivSiteFootNavRight} & {
		display: inline-block;
		padding: 2px 5px;
	}
	${DivSiteFootNavRight} &:last-child {
		padding-right: 0;
	}
`;
export const ASiteFootNavItem = styled.a`
	${CssSiteFootNavItem}
`;
export const LinkSiteFootNavItem = styled(Link)`
	${CssSiteFootNavItem}
`;
