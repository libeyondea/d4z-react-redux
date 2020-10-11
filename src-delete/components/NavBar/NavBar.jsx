import React from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutThunk } from '../../thunks/authThunk';

const propTypes = {
	logoutThunk: PropTypes.func.isRequired,
	login: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	login: state.auth.login
});
const mapDispatchToProps = {
	logoutThunk
};
const Navbar = (props) => {
	const { logoutThunk, login } = props;
	const history = useHistory();
	const onLogout = (event) => {
		event.preventDefault();
		logoutThunk(history);
	};
	const authLinks = (
		<>
			<li className="nav-item">
				<Link className="nav-link btn btn-primary" to="/posts/create">
					Create post
				</Link>
			</li>
			<li className="nav-item dropdown">
				<a
					href="#!"
					className="nav-link dropdown-toggle"
					id="navbarDropdownUser"
					data-toggle="dropdown"
					aria-expanded="true"
				>
					<span className="mr-1">{login.user.user_name}</span>
					<img
						src="http://www.gravatar.com/avatar/08807ef52c734e34520bbfee71c060b7?s=200&r=pg&d=mm"
						alt={login.user.user_name}
						title={login.user.user_name}
						className="rounded-circle"
						style={{
							width: '20px',
							marginRight: '5px'
						}}
					/>
				</a>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownUser">
					<Link className="dropdown-item" to={`/users/${login.user.id}/${login.user.user_name}`}>
						Profile
					</Link>
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
					De4thZone
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
							<Link className="nav-link" to="/">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Contact
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/users">
								Users
							</Link>
						</li>
						{login.isAuthenticated ? authLinks : guestLinks}
					</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
