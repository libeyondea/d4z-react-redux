import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import config from '../../utils/siteConfig';
import {
	DivViewPort,
	DivViewPortTop,
	HeaderSite,
	Container,
	DivSiteMast,
	DivSiteMastRight,
	DivSiteMastLeft,
	ImgSiteNavIcon,
	ImgSiteLogo,
	ASiteNavItem,
	LinkSiteNavItem,
	DivDropDown,
	ADropDownToggleASiteNavItem,
	DivDropDownMenu,
	ADropDownItem,
	LinkDropDownItem,
	DivDropdownDivider,
	DivSiteBanner,
	H1SiteBannerTitle,
	PSiteBannerDesc,
	NavSite,
	DivSiteNavLeft,
	DivSiteNavRight,
	LinkSiteNavButton,
	MainSiteMain,
	DivViewportBottom,
	FooterSite,
	DivSiteFootNavContainer,
	DivSiteFootNavLeft,
	DivSiteFootNavRight,
	ASiteFootNavItem,
	LinkSiteFootNavItem
} from '../Styled/Layout';

const data = {
	node: {
		title: 'De4th Zone',
		description: 'De4th Zone',
		logo: '/images/logo.png',
		icon: 'https://gatsby.ghost.io/content/images/2019/01/favicon.png',
		cover_image: 'https://static.ghost.org/v1.0.0/images/blog-cover.jpg',
		facebook: 'd4z.d4z.d4z.d4z',
		twitter: '@NHT_445448',
		lang: 'en',
		navigation: [
			{
				label: 'Home',
				url: '/'
			},
			{
				label: 'Tag',
				url: '/tags'
			},
			{
				label: 'Category',
				url: '/categories'
			},
			{
				label: 'Users',
				url: '/users'
			},
			{
				label: 'Help',
				url: 'https://www.facebook.com/d4z.d4z.d4z.d4z'
			}
		]
	}
};
const Layout = ({ logoutThunk, login, children, isHome }) => {
	const site = data.node;
	const history = useHistory();
	const handleLogoutSubmit = (event) => {
		event.preventDefault();
		logoutThunk(history);
	};
	return (
		<>
			<Helmet>
				<html lang={site.lang} />
			</Helmet>
			<DivViewPort>
				<DivViewPortTop>
					<HeaderSite style={{ ...(site.cover_image && { backgroundImage: `url(${site.cover_image})` }) }}>
						<Container>
							<DivSiteMast>
								<DivSiteMastLeft>
									<Link to="/">{site.logo && <ImgSiteLogo src={site.logo} alt={site.title} />}</Link>
								</DivSiteMastLeft>
								<DivSiteMastRight>
									{login.isAuthenticated ? (
										<DivDropDown>
											<ADropDownToggleASiteNavItem href="#!">{login.user.user_name}</ADropDownToggleASiteNavItem>
											<DivDropDownMenu>
												<LinkDropDownItem to={`/users/${login.user.id}/${login.user.user_name}`}>
													Profile
												</LinkDropDownItem>
												<DivDropdownDivider />
												<ADropDownItem href="#!" onClick={handleLogoutSubmit}>
													Logout
												</ADropDownItem>
											</DivDropDownMenu>
										</DivDropDown>
									) : (
										<>
											<LinkSiteNavItem to="/login">Login</LinkSiteNavItem>
											<LinkSiteNavItem to="/register">Register</LinkSiteNavItem>
										</>
									)}
									<ASiteNavItem
										href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ImgSiteNavIcon src="/images/icons/rss.svg" alt="RSS Feed" />
									</ASiteNavItem>
								</DivSiteMastRight>
							</DivSiteMast>
							{isHome && (
								<DivSiteBanner>
									<H1SiteBannerTitle>{site.title}</H1SiteBannerTitle>
									<PSiteBannerDesc>{site.description}</PSiteBannerDesc>
								</DivSiteBanner>
							)}
							<NavSite>
								<DivSiteNavLeft>
									<Navigation data={site.navigation} navTop={true} />
								</DivSiteNavLeft>
								<DivSiteNavRight>
									<LinkSiteNavButton to="/about">About</LinkSiteNavButton>
								</DivSiteNavRight>
							</NavSite>
						</Container>
					</HeaderSite>
				</DivViewPortTop>
				<MainSiteMain>{children}</MainSiteMain>
				<DivViewportBottom>
					<FooterSite>
						<DivSiteFootNavContainer>
							<DivSiteFootNavLeft>
								<LinkSiteFootNavItem to="/">{site.title}</LinkSiteFootNavItem> © 2019 &mdash; Published with{' '}
								<ASiteFootNavItem href="https://d4-zone.netlify.app" target="_blank" rel="noopener noreferrer">
									D4Z
								</ASiteFootNavItem>
							</DivSiteFootNavLeft>
							<DivSiteFootNavRight>
								<Navigation data={site.navigation} navTop={false} />
							</DivSiteFootNavRight>
						</DivSiteFootNavContainer>
					</FooterSite>
				</DivViewportBottom>
			</DivViewPort>
		</>
	);
};

Layout.propTypes = {
	logoutThunk: PropTypes.func.isRequired,
	login: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
	isHome: PropTypes.bool
};

export default Layout;
