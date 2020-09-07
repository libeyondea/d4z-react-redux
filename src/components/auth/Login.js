import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/authAction';
import classnames from 'classnames';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Login = ({ loginAction, log, history }) => {
	const { register, errors, handleSubmit } = useForm();

	const [state, setState] = useState({
		email: '',
		password: ''
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setState(state => ({
			...state,
			[name]: value
		}))
	}

	const onSubmit = () => {
		const user = {
			email: state.email,
			password: state.password,
		}
		loginAction(user);
	}

	useEffect(() => {
		if (log.isAuthenticated) {
			history.push('/');
		}
	})

	return (
		<React.Fragment>
			<header className="masthead" style={{ backgroundImage: 'url("assets/img/home-bg.jpg")' }}>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="site-heading">
								<h1>Login</h1>
								<span className="subheading">Login Now</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<div className="nht-form">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Email</label>
										<input
											type="text"
											id="email"
											placeholder="Email"
											className={classnames('form-control', { 'is-invalid': errors.email || log.errors.user})}
											name="email"
											onChange={handleInputChange}
											ref={register({
												required: "Email is required",
												pattern: {
													value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
													message: "Email is invalid"
												},
												maxLength: {
													value: 66,
													message: "Email must not exceed 66 characters"
												}
											})}
										/>
										<ErrorMessage
											errors={errors}
											name="email"
											render={({ message }) => <div className="invalid-feedback">{message}</div>}
										/>
										{log.errors.user && (<div className="invalid-feedback">{log.errors.user}</div>)}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Password</label>
										<input
											type="password"
											id="password"
											placeholder="Password"
											className={classnames('form-control', { 'is-invalid': errors.password || log.errors.user})}
											name="password"
											onChange={handleInputChange}
											ref={register({
												required: "Password is required",
												maxLength: {
													value: 66,
													message: "Password must not exceed 66 characters"
												}
											})}
										/>
										<ErrorMessage
											errors={errors}
											name="password"
											render={({ message }) => <div className="invalid-feedback">{message}</div>}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="remember" />
											<label className="custom-control-label" htmlFor="remember">Remember</label>
										</div>
										<span><a href="!#">Forgot password?</a></span>
									</div>
								</div>
								<div className="text-center">
									{log.isLoading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
											Loading...
										</button>
									) : (
											<button type="submit" className="btn btn-primary">
												Login
											</button>
										)}
									<p>Not a member? <Link to="/register">Register</Link></p>
									<p>or sign in with:</p>
									<a href="!#" className="btn-floating btn-fb btn-sm mr-1">
										<i className="fab fa-facebook-f" />
									</a>
									<a href="!#" className="btn-floating btn-tw btn-sm mr-1">
										<i className="fab fa-twitter" />
									</a>
									<a href="!#" className="btn-floating btn-li btn-sm mr-1">
										<i className="fab fa-linkedin-in" />
									</a>
									<a href="!#" className="btn-floating btn-git btn-sm">
										<i className="fab fa-github" />
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

Login.propTypes = {
	loginAction: PropTypes.func.isRequired,
	log: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	log: state.log
})

export default connect(mapStateToProps, { loginAction })(Login)