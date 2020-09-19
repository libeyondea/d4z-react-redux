import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, useHistory } from 'react-router-dom';
import { registerThunk } from '../../thunks/authThunk';
import classnames from 'classnames';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MainLayout from '../../layouts/MainLayout';

const propTypes = {
	registerThunk: PropTypes.func.isRequired,
	log: PropTypes.object.isRequired,
	reg: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	log: state.log,
	reg: state.reg
});
const mapDispatchToProps = {
	registerThunk
};
const Register = (props) => {
	const { registerThunk, reg } = props;
	const history = useHistory();
	const formik = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			user_name: '',
			email: '',
			password: '',
			password_confirm: '',
			phone_number: '',
			address: '',
			gender: ''
		},
		validationSchema: Yup.object({
			first_name: Yup.string().required('First name is required'),
			last_name: Yup.string().required('Last name is required'),
			user_name: Yup.string().required('User name is required'),
			email: Yup.string().email('Invalid email').required('Email is required'),
			password: Yup.string().required('Password is required'),
			password_confirm: Yup.string()
				.required('Comfirm password is required')
				.oneOf([Yup.ref('password')], 'Password is not match'),
			phone_number: Yup.string().required('Phone number is required'),
			address: Yup.string().required('Address is required')
		}),
		onSubmit: (values) => {
			const user = {
				first_name: values.first_name,
				last_name: values.last_name,
				user_name: values.user_name,
				email: values.email,
				password: values.password,
				phone_number: values.phone_number,
				address: values.address,
				gender: values.gender
			};
			registerThunk(user, history);
		}
	});
	const gender = {
		male: '1',
		female: '0',
		orther: ''
	};
	return (
		<MainLayout>
			<header className="masthead" style={{ backgroundImage: 'url("assets/img/home-bg.jpg")' }}>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="site-heading">
								<h1>Register</h1>
								<span className="subheading">Register Now</span>
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
										<label>First name</label>
										<input
											type="text"
											id="first_name"
											name="first_name"
											placeholder="First name"
											className={classnames('form-control', {
												'is-invalid': formik.touched.first_name && formik.errors.first_name
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.first_name}
										/>
										{formik.touched.emafirst_nameil && formik.errors.first_name ? (
											<div className="invalid-feedback">{formik.errors.first_name}</div>
										) : null}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Last name</label>
										<input
											type="text"
											id="last_name"
											name="last_name"
											placeholder="Last name"
											className={classnames('form-control', {
												'is-invalid': formik.touched.last_name && formik.errors.last_name
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.last_name}
										/>
										{formik.touched.last_name && formik.errors.last_name ? (
											<div className="invalid-feedback">{formik.errors.last_name}</div>
										) : null}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>User name</label>
										<input
											type="text"
											id="user_name"
											name="user_name"
											placeholder="User name"
											className={classnames('form-control', {
												'is-invalid':
													reg.errors.user_name ||
													(formik.touched.user_name && formik.errors.user_name)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.user_name}
										/>
										{formik.touched.user_name && formik.errors.user_name ? (
											<div className="invalid-feedback">{formik.errors.user_name}</div>
										) : null}
										{reg.errors.user_name && (
											<div className="invalid-feedback">{reg.errors.user_name}</div>
										)}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Your email</label>
										<input
											type="email"
											id="email"
											name="email"
											placeholder="Your email"
											className={classnames('form-control', {
												'is-invalid':
													reg.errors.email || (formik.touched.email && formik.errors.email)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors.email ? (
											<div className="invalid-feedback">{formik.errors.email}</div>
										) : null}
										{reg.errors.email && <div className="invalid-feedback">{reg.errors.email}</div>}
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
												'is-invalid': formik.touched.password && formik.errors.password
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.password}
										/>
										{formik.touched.password && formik.errors.password ? (
											<div className="invalid-feedback">{formik.errors.password}</div>
										) : null}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Confirm Password</label>
										<input
											type="password"
											id="password_confirm"
											name="password_confirm"
											placeholder="Confirm Password"
											className={classnames('form-control', {
												'is-invalid':
													formik.touched.password_confirm && formik.errors.password_confirm
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.password_confirm}
										/>
										{formik.touched.password_confirm && formik.errors.password_confirm ? (
											<div className="invalid-feedback">{formik.errors.password_confirm}</div>
										) : null}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Phone number</label>
										<input
											type="text"
											id="phone_number"
											name="phone_number"
											placeholder="Phone number"
											className={classnames('form-control', {
												'is-invalid': formik.touched.phone_number && formik.errors.phone_number
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.phone_number}
										/>
										{formik.touched.phone_number && formik.errors.phone_number ? (
											<div className="invalid-feedback">{formik.errors.phone_number}</div>
										) : null}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Address</label>
										<input
											type="text"
											id="address"
											name="address"
											placeholder="Address"
											className={classnames('form-control', {
												'is-invalid': formik.touched.address && formik.errors.address
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.address}
										/>
										{formik.touched.address && formik.errors.address ? (
											<div className="invalid-feedback">{formik.errors.address}</div>
										) : null}
									</div>
								</div>
								<div className="control-group">
									<div className="custom-control custom-radio custom-control-inline mb-4">
										<input
											type="radio"
											id="Male"
											name="gender"
											value={gender.male}
											className="custom-control-input"
											onChange={formik.handleChange}
											checked={formik.values.gender === gender.male}
										/>
										<label className="custom-control-label" htmlFor="Male">
											Male
										</label>
									</div>
									<div className="custom-control custom-radio custom-control-inline">
										<input
											type="radio"
											id="Female"
											name="gender"
											value={gender.female}
											className="custom-control-input"
											onChange={formik.handleChange}
											checked={formik.values.gender === gender.female}
										/>
										<label className="custom-control-label" htmlFor="Female">
											Female
										</label>
									</div>
									<div className="custom-control custom-radio custom-control-inline">
										<input
											type="radio"
											id="Other"
											name="gender"
											value={gender.orther}
											className="custom-control-input"
											onChange={formik.handleChange}
											checked={formik.values.gender === gender.orther}
										/>
										<label className="custom-control-label" htmlFor="Other">
											Other
										</label>
									</div>
								</div>
								<div className="control-group">
									<div className="custom-control custom-checkbox mb-3">
										<input
											type="checkbox"
											className="custom-control-input"
											id="invalidCheck"
											required
										/>
										<label className="custom-control-label" htmlFor="invalidCheck">
											Agree to terms of service
										</label>
									</div>
								</div>
								<div className="text-center">
									{reg.isLoading ? (
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
											Register
										</button>
									)}
									<p>or sign up with:</p>
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
									<hr className="mt-4" />
									<p>
										By clicking <em>Register</em> you agree to our <a href="#!">terms of service</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};
Register.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
