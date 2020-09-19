import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginThunk } from '../../thunks/authThunk';
import classnames from 'classnames';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MainLayout from '../../layouts/MainLayout';

const propTypes = {
	loginThunk: PropTypes.func.isRequired,
	log: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	log: state.log
});
const mapDispatchToProps = {
	loginThunk
};
const Login = (props) => {
	const { loginThunk, log } = props;
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email').required('Email is required'),
			password: Yup.string().required('Password is required')
		}),
		onSubmit: (values) => {
			const user = {
				email: values.email,
				password: values.password
			};
			loginThunk(user);
		}
	});
	return (
		<MainLayout>
			<header className="masthead" style={{ backgroundImage: 'url("/assets/img/home-bg.jpg")' }}>
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
							<form onSubmit={formik.handleSubmit}>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Email</label>
										<input
											type="text"
											id="email"
											name="email"
											placeholder="Email"
											className={classnames('form-control', {
												'is-invalid':
													log.errors.user || (formik.touched.email && formik.errors.email)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors.email ? (
											<div className="invalid-feedback">{formik.errors.email}</div>
										) : null}
										{log.errors.user && <div className="invalid-feedback">{log.errors.user}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Password</label>
										<input
											type="password"
											id="password"
											name="password"
											placeholder="Password"
											className={classnames('form-control', {
												'is-invalid':
													log.errors.user || (formik.touched.password && formik.errors.password)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.password}
										/>
										{formik.touched.password && formik.errors.password ? (
											<div className="invalid-feedback">{formik.errors.password}</div>
										) : null}
										{log.errors.user && <div className="invalid-feedback">{log.errors.user}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="remember" />
											<label className="custom-control-label" htmlFor="remember">
												Remember
											</label>
										</div>
										<span>
											<a href="!#">Forgot password?</a>
										</span>
									</div>
								</div>
								<div className="text-center">
									{log.isLoading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span
												className="spinner-border spinner-border-sm mr-1"
												role="status"
												aria-hidden="true"
											/>
											Loading...
										</button>
									) : (
										<button type="submit" className="btn btn-primary">
											Login
										</button>
									)}
									<p>
										Not a member? <Link to="/register">Register</Link>
									</p>
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
		</MainLayout>
	);
};
Login.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
