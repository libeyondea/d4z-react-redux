import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutThunk } from '../../thunks/authThunk';
import { withRouter } from 'react-router-dom';

const propTypes = {
	logoutThunk: PropTypes.func.isRequired,
	log: PropTypes.object.isRequired
};
const mapDispatchToProps = {
	logoutThunk
};
const Navbar = (props) => {
	const { logoutThunk, log } = props;
	const history = useHistory();
	const onLogout = (event) => {
		event.preventDefault();
		logoutThunk(history);
	};
	const authLinks = (
		<>
			<li className="nav-item">
				<Link className="nav-link" to="/create-post">
					Create post
				</Link>
			</li>
			<li className="nav-item dropdown">
				<a
					href="#!"
					className="nav-link dropdown-toggle"
					id="navbarDropdownUser"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="true"
				>
					<span className="mr-1">{log.user.user_name}</span>
					<img
						src="http://www.gravatar.com/avatar/08807ef52c734e34520bbfee71c060b7?s=200&r=pg&d=mm"
						alt={log.user.user_name}
						title={log.user.user_name}
						className="rounded-circle"
						style={{
							width: '20px',
							marginRight: '5px'
						}}
					/>
				</a>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownUser">
					<a className="dropdown-item" href="#!">
						Info
					</a>
					<a className="dropdown-item" href="#!" onClick={onLogout.bind(this)}>
						Logout
					</a>
				</div>
			</li>
		</>
	);
	const guestLinks = (
		<>
			<li className="nav-item">
				<Link className="nav-link" to="/register">
					Register
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/login">
					Login
				</Link>
			</li>
		</>
	);
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div className="container">
				<Link className="navbar-brand" to="/">
					NguyenThucOfficial
				</Link>
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					Menu
					<i className="fas fa-bars ml-1" />
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="about.html">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="post.html">
								Sample Post
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">
								Contact
							</a>
						</li>
						{log.isAuthenticated ? authLinks : guestLinks}
					</ul>
				</div>
			</div>
		</nav>
	);
};
const mapStateToProps = (state) => ({
	log: state.log
});
Navbar.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
