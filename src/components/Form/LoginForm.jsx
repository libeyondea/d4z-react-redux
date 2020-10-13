import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputForm from './InputForm';

const LoginForm = ({ loginThunk, login }) => {
	const initialValues = {
		email: '',
		password: ''
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('Email is required'),
		password: Yup.string().required('Password is required')
	});
	const onSubmit = (values) => {
		const user = {
			email: values.email,
			password: values.password
		};
		loginThunk(user);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-10 mx-auto">
					<div className="nht-form">
						<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
							<Form>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<InputForm
											label="Email"
											id="email"
											name="email"
											type="text"
											isError={login.isError}
											errorMessage={login.errorMessage.user}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<InputForm
											label="Password"
											id="password"
											name="password"
											type="password"
											isError={login.isError}
											errorMessage={login.errorMessage.user}
										/>
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
											<a href="#!">Forgot password?</a>
										</span>
									</div>
								</div>
								<div className="text-center">
									{login.isLoading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
											Loading...
										</button>
									) : (
										<button type="submit" className="btn btn-primary">
											Login
										</button>
									)}
									<p className="mt-5">
										Not a member? <Link to="/register">Register</Link>
									</p>
									<p>or sign in with:</p>
									<a href="#!" className="btn-floating btn-fb btn-sm mr-1">
										<i className="fab fa-facebook-f" />
									</a>
									<a href="#!" className="btn-floating btn-tw btn-sm mr-1">
										<i className="fab fa-twitter" />
									</a>
									<a href="#!" className="btn-floating btn-li btn-sm mr-1">
										<i className="fab fa-linkedin-in" />
									</a>
									<a href="#!" className="btn-floating btn-git btn-sm">
										<i className="fab fa-github" />
									</a>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};

LoginForm.propTypes = {
	loginThunk: PropTypes.func.isRequired,
	login: PropTypes.object.isRequired
};

export default LoginForm;
