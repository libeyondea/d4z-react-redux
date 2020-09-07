import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerAction } from '../../actions/authAction';
import classnames from 'classnames';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Register = ({ registerAction, reg, log, history }) => {

	const { register, errors, handleSubmit } = useForm();

	const [state, setState] = useState({
		first_name: '',
		last_name: '',
		user_name: '',
		email: '',
		password: '',
		password_confirm: '',
		phone_number: '',
		address: '',
		gender: '1'
	})

	const listGender = {
		male: '1',
		female: '0',
		orther: '',
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setState(state => ({
			...state,
			[name]: value
		}))
	}

	const onSubmit = () => {
		const user = {
			first_name: state.first_name,
			last_name: state.last_name,
			user_name: state.user_name,
			email: state.email,
			password: state.password,
			phone_number: state.phone_number,
			address: state.address,
			gender: state.gender,
		}
		registerAction(user, history);
	}

	useEffect(() => {
		if (log.isAuthenticated) {
			history.push('/');
		}
	})

	const { male, female, orther } = listGender;

	return (
		<React.Fragment>
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
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>First name</label>
										<input
											type="text"
											id="first_name"
											placeholder="First name"
											className={classnames('form-control', {
												'is-invalid': errors.first_name
											})}
											name="first_name"
											onChange={handleInputChange}
											ref={register({
												required: "First name is required",
												pattern: {
													value: /^[a-zA-Z]+$/,
													message: "First name is invalid"
												},
												maxLength: {
													value: 16,
													message: "First name must not exceed 16 characters"
												}
											})}
										/>
										<ErrorMessage
											errors={errors}
											name="first_name"
											render={({ message }) => <div className="invalid-feedback">{message}</div>}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Last name</label>
										<input
											type="text"
											id="last_name"
											placeholder="Last name"
											className={classnames('form-control', {
												'is-invalid': errors.last_name
											})}
											name="last_name"
											onChange={handleInputChange}
											ref={register({
												required: "Last name is required",
												pattern: {
													value: /^[a-zA-Z]+$/,
													message: "Last name is invalid"
												},
												maxLength: {
													value: 16,
													message: "Last name must not exceed 16 characters"
												}
											})}
										/>
										<ErrorMessage
											errors={errors}
											name="last_name"
											render={({ message }) => <div className="invalid-feedback">{message}</div>}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>User name</label>
										<input
											type="text"
											id="user_name"
											placeholder="User name"
											className={classnames('form-control', {
												'is-invalid': errors.user_name || reg.errors.user_name
											})}
											name="user_name"
											onChange={handleInputChange}
											ref={register({
												required: "User name is required",
												pattern: {
													value: /^[a-zA-Z0-9]+$/,
													message: "User name is invalid"
												},
												minLength: {
													value: 6,
													message: "User name must be at least 6 characters"
												},
												maxLength: {
													value: 66,
													message: "User name must not exceed 66 characters"
												}
											})}
										/>
										<ErrorMessage
											errors={errors}
											name="user_name"
											render={({ message }) => <div className="invalid-feedback">{message}</div>}
										/>
										{reg.errors.user_name && (<div className="invalid-feedback">{reg.errors.user_name}</div>)}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Your email</label>
										<input
											type="email"
											id="email"
											placeholder="Your email"
											className={classnames('form-control', {
												'is-invalid': errors.email || reg.errors.email
											})}
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
										{reg.errors.email && (<div className="invalid-feedback">{reg.errors.email}</div>)}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Password</label>
										<input
											type="password"
											id="password"
											placeholder="Password"
											className={classnames('form-control', {
												'is-invalid': errors.password
											})}
											name="password"
											onChange={handleInputChange}
											ref={register({
												required: "Password is required",
												minLength: {
													value: 6,
													message: "Password must be at least 6 characters"
												},
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
									<div className="form-group floating-label-form-group controls">
										<label>Confirm Password</label>
										<input
											type="password"
											id="password_confirm"
											placeholder="Confirm Password"
											className={classnames('form-control', {
												'is-invalid': errors.password_confirm
											})}
											name="password_confirm"
											onChange={handleInputChange}
											ref={register({
												validate: value => value === state.password || "Confirm Password do not match"
											})}
										/>
										<ErrorMessage
											errors={errors}
											name="password_confirm"
											render={({ message }) => <div className="invalid-feedback">{message}</div>}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Phone number</label>
										<input
											type="text"
											id="phone_number"
											placeholder="Phone number"
											className={classnames('form-control', {
												'is-invalid': errors.phone_number
											})}
											name="phone_number"
											onChange={handleInputChange}
											ref={register({
												required: "Phone number is required",
												pattern: {
													value: /^[0-9]+$/,
													message: "Phone number is invalid"
												},
												minLength: {
													value: 6,
													message: "Phone number must be at least 6 characters"
												},
												maxLength: {
													value: 16,
													message: "Phone number must not exceed 16 characters"
												}
											})}
										/>
										<ErrorMessage
											errors={errors}
											name="phone_number"
											render={({ message }) => <div className="invalid-feedback">{message}</div>}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Address</label>
										<input
											type="text"
											id="address"
											placeholder="Address"
											className={classnames('form-control', {
												'is-invalid': errors.address
											})}
											name="address"
											onChange={handleInputChange}
											ref={register({
												required: "Address is required",
												maxLength: {
													value: 666,
													message: "Address must not exceed 66 characters"
												}
											})}
										/>
										<ErrorMessage
											errors={errors}
											name="address"
											render={({ message }) => <div className="invalid-feedback">{message}</div>}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="custom-control custom-radio custom-control-inline mb-4">
										<input type="radio" id="Male" name="gender" value={male} className="custom-control-input" onChange={handleInputChange} checked={state.gender === male}/>
										<label className="custom-control-label" htmlFor="Male">Male</label>
									</div>
									<div className="custom-control custom-radio custom-control-inline">
										<input type="radio" id="Female" name="gender" value={female} className="custom-control-input" onChange={handleInputChange} checked={state.gender === female}/>
										<label className="custom-control-label" htmlFor="Female">Female</label>
									</div>
									<div className="custom-control custom-radio custom-control-inline">
										<input type="radio" id="Other" name="gender" value={orther} className="custom-control-input" onChange={handleInputChange} checked={state.gender === orther}/>
										<label className="custom-control-label" htmlFor="Other">Other</label>
									</div>
								</div>
								<div className="control-group">
									<div className="custom-control custom-checkbox mb-3">
										<input type="checkbox" className="custom-control-input" id="invalidCheck" required />
										<label className="custom-control-label" htmlFor="invalidCheck">Agree to terms of service</label>
									</div>
								</div>
								<div className="text-center">
									{reg.isLoading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
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
									<p>By clicking <em>Register</em> you agree to our <a href="#!">terms of service</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

Register.propTypes = {
	registerAction: PropTypes.func.isRequired,
	log: PropTypes.object.isRequired,
	reg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	log: state.log,
	reg: state.reg
});

export default connect(mapStateToProps, { registerAction })(withRouter(Register))