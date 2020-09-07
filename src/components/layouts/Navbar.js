import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import { withRouter } from 'react-router-dom';

const Navbar = ({logoutUser, log, history}) => {
    const onLogout = (e) => {
        e.preventDefault();
        logoutUser(history);
    }

    const { isAuthenticated, user } = log;

    const authLinks = (
        <React.Fragment>
        	<li className="nav-item">
				<Link className="nav-link" to="/create-post">Create post</Link>
			</li>
			<li className="nav-item dropdown">
				<a href="!#" className="nav-link dropdown-toggle" id="navbarDropdownUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					<span className="mr-1">{user.user_name}</span>
					<img src="http://www.gravatar.com/avatar/08807ef52c734e34520bbfee71c060b7?s=200&r=pg&d=mm" alt={user.user_name} title={user.user_name} className="rounded-circle" style={{ width: '20px', marginRight: '5px' }} />
				</a>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownUser">
					<a className="dropdown-item" href="#!">Info</a>
					<a className="dropdown-item" href="#!" onClick={onLogout.bind(this)}>Logout</a>
				</div>
			</li>
		</React.Fragment>
    )
    const guestLinks = (
        <React.Fragment>
			<li className="nav-item">
				<Link className="nav-link" to="/register">Register</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/login">Login</Link>
			</li>
		</React.Fragment>
    )
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div className="container">
				<Link className="navbar-brand" to="/">NguyenThucOfficial</Link>
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					Menu
					<i className="fas fa-bars ml-1" />
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="about.html">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="post.html">Sample Post</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">Contact</a>
						</li>
						{isAuthenticated ? authLinks : guestLinks}
					</ul>
				</div>
			</div>
		</nav>
    )
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    log: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    log: state.log
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));