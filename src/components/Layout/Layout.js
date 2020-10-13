import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
// Components
import Navigation from '../Navigation/Navigation';
// Config
import config from '../../utils/siteConfig';

import styles from '../../styles/app.module.css';

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
			<div className={styles.viewport}>
				<div className="viewport-top">
					<header
						className="site-head"
						style={{ ...(site.cover_image && { backgroundImage: `url(${site.cover_image})` }) }}
					>
						<div className="container">
							<div className="site-mast">
								<div className="site-mast-left">
									<Link to="/">{site.logo && <img className="site-logo" src={site.logo} alt={site.title} />}</Link>
								</div>
								<div className="site-mast-right">
									{login.isAuthenticated ? (
										<div className="dropdown">
											<a href="#!" className="site-nav-item dropdown-toggle">
												{login.user.user_name}
											</a>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to={`/users/${login.user.id}/${login.user.user_name}`}>
													Profile
												</Link>
												<div className="dropdown-divider"></div>
												<a href="#!" className="dropdown-item" onClick={handleLogoutSubmit}>
													Logout
												</a>
											</div>
										</div>
									) : (
										<>
											<Link to="/login" className="site-nav-item">
												Login
											</Link>
											<Link to="/register" className="site-nav-item">
												Register
											</Link>
										</>
									)}
									<a
										className="site-nav-item"
										href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" />
									</a>
								</div>
							</div>
							{isHome ? (
								<div className="site-banner">
									<h1 className="site-banner-title">{site.title}</h1>
									<p className="site-banner-desc">{site.description}</p>
								</div>
							) : null}
							<nav className="site-nav">
								<div className="site-nav-left">
									{/* The navigation items as setup in Ghost */}
									<Navigation data={site.navigation} navClass="site-nav-item" />
								</div>
								<div className="site-nav-right">
									<Link className="site-nav-button" to="/about">
										About
									</Link>
								</div>
							</nav>
						</div>
					</header>
					<main className="site-main">
						{/* All the main content gets inserted here, index.js, post.js */}
						{children}
					</main>
				</div>

				<div className="viewport-bottom">
					<footer className="site-foot">
						<div className="site-foot-nav container">
							<div className="site-foot-nav-left">
								<Link to="/">{site.title}</Link> © 2019 &mdash; Published with{' '}
								<a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">
									Ghost
								</a>
							</div>
							<div className="site-foot-nav-right">
								<Navigation data={site.navigation} navClass="site-foot-nav-item" />
							</div>
						</div>
					</footer>
				</div>
			</div>
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
