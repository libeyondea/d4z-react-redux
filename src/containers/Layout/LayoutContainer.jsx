import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import config from '../../utils/siteConfig';
import GlobalStyle from '../../components/Styled/GlobalStyle';
import {
	DivViewPort,
	DivViewPortTop,
	HeaderSite,
	//DivSiteMast,
	//DivSiteMastRight,
	//DivSiteMastLeft,
	//ImgSiteNavIcon,
	ImgSiteLogo,
	//ASiteNavItem,
	//LinkSiteNavItem,
	//DivDropDown,
	//ADropDownToggleASiteNavItem,
	//DivDropDownMenu,
	//ADropDownItem,
	//LinkDropDownItem,
	//DivDropdownDivider,
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
} from '../../components/Styled/Layout';
import { Container } from '../../components/Styled/Wapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutThunk } from '../../thunks/authThunk';
import { fetchCategoryThunk } from '../../thunks/categoryThunk';
import './style.css';
import { useDetectOutsideClick } from '../../helpers/useDetectOutsideClick';

const mapStateToProps = (state) => ({
	login: state.auth.login,
	fetchCategory: state.categories.fetchCategory
});
const mapDispatchToProps = {
	logoutThunk,
	fetchCategoryThunk
};
const Layout = ({ logoutThunk, login, children, isHome, fetchCategoryThunk, fetchCategory }) => {
	const containerCate = createRef(null);
	const containerUser = createRef(null);
	const containerNavM = createRef(null);
	const [openMenuCate, setOpenMenuCate] = useDetectOutsideClick(containerCate, false);
	const [openMenuUser, setOpenMenuUser] = useDetectOutsideClick(containerUser, false);
	const [openMenuNavM, setOpenMenuNavM] = useDetectOutsideClick(containerNavM, false);
	const handleClickMenu = (getName) => {
		if (getName === 'categories') {
			setOpenMenuCate(!openMenuCate);
			setOpenMenuUser(false);
		} else if (getName === 'user_name') {
			setOpenMenuUser(!openMenuUser);
			setOpenMenuCate(false);
		} else if (getName === 'nav_mobile') {
			setOpenMenuNavM(!openMenuNavM);
			setOpenMenuCate(false);
			setOpenMenuUser(false);
		}
	};

	const site = config.layoutWebsite;
	const history = useHistory(null);
	const handleLogoutSubmit = (event) => {
		event.preventDefault();
		logoutThunk(history);
	};
	useEffect(() => {
		fetchCategoryThunk();
	}, [fetchCategoryThunk]);

	const ListCategory = (category) => {
		return category.map((node) => (
			<li key={node.id}>
				<Link to={`/categories/${node.id}/${node.slug}`}>{node.title}</Link>
			</li>
		));
	};

	return (
		<>
			<GlobalStyle />
			<Helmet>
				<html lang={site.lang} />
			</Helmet>
			<DivViewPort>
				<DivViewPortTop>
					<section className="navigation">
						<div className="nav-container">
							<div className="brand">
								<Link to="/">{site.logo && <ImgSiteLogo src={site.logo} alt={site.title} />}</Link>
							</div>
							<nav>
								<div className="nav-mobile">
									<a
										className={`${openMenuNavM ? 'active' : ''}`}
										id="nav-toggle"
										href="#!"
										onClick={handleClickMenu.bind(this, 'nav_mobile')}
									>
										<span />
									</a>
								</div>
								<ul
									ref={containerNavM}
									className="nav-list"
									style={openMenuNavM ? { display: 'block' } : { display: 'none' }}
								>
									<li>
										<a href="#!">Home</a>
									</li>
									<li>
										<a href="#!">About</a>
									</li>
									<li>
										<a href="#!" onClick={handleClickMenu.bind(this, 'categories')}>
											Categories
										</a>
										<ul ref={containerCate} className="nav-dropdown">
											{openMenuCate && ListCategory(fetchCategory.category)}
										</ul>
									</li>
									{login.isAuthenticated ? (
										<li>
											<a href="#!" onClick={handleClickMenu.bind(this, 'user_name')}>
												{login.user.user_name}
											</a>
											<ul ref={containerUser} className="nav-dropdown">
												{openMenuUser && (
													<>
														<li>
															<Link to={`/users/${login.user.id}/${login.user.user_name}`}>Profile</Link>
														</li>
														<li>
															<a href="#!" onClick={handleLogoutSubmit}>
																Logout
															</a>
														</li>
													</>
												)}
											</ul>
										</li>
									) : (
										<>
											<li>
												<Link to="/login">Login</Link>
											</li>
											<li>
												<Link to="/register">Register</Link>
											</li>
										</>
									)}
								</ul>
							</nav>
						</div>
					</section>

					<HeaderSite style={{ ...(site.cover_image && { backgroundImage: `url(${site.cover_image})` }) }}>
						<Container>
							{/*}
							<DivSiteMast>
								<DivSiteMastLeft>
									<Link to="/">{site.logo && <ImgSiteLogo src={site.logo} alt={site.title} />}</Link>
								</DivSiteMastLeft>
								<DivSiteMastRight>
									<DivDropDown>
										<ADropDownToggleASiteNavItem href="#!">Categories</ADropDownToggleASiteNavItem>
									</DivDropDown>
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
							*/}
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
									{login.isAuthenticated && <LinkSiteNavButton to="/posts/create">Create post</LinkSiteNavButton>}
								</DivSiteNavRight>
							</NavSite>
						</Container>
					</HeaderSite>
					<MainSiteMain>{children}</MainSiteMain>
				</DivViewPortTop>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
