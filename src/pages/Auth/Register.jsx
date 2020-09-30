import React from 'react';
import { useHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { registerThunk } from '../../thunks/authThunk';
import MainLayout from '../../layouts/MainLayout';
import InputFormik from '../../components/Formik/InputFormik';
import SelectFormik from '../../components/Formik/SelectFormik';
import CheckBoxFormik from '../../components/Formik/CheckBoxFormik';

const propTypes = {
	registerThunk: PropTypes.func.isRequired,
	reg: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	reg: state.reg
});
const mapDispatchToProps = {
	registerThunk
};
const Register = (props) => {
	const { registerThunk, reg } = props;
	const history = useHistory();
	const initialValues = {
		first_name: '',
		last_name: '',
		user_name: '',
		email: '',
		password: '',
		password_confirm: '',
		phone_number: '',
		address: '',
		gender: '',
		agreeterms: false
	};
	const validationSchema = Yup.object({
		first_name: Yup.string().required('First name is required'),
		last_name: Yup.string().required('Last name is required'),
		user_name: Yup.string().required('User name is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string().required('Password is required'),
		password_confirm: Yup.string()
			.required('Comfirm password is required')
			.oneOf([Yup.ref('password')], 'Password is not match'),
		phone_number: Yup.string().required('Phone number is required'),
		address: Yup.string().required('Address is required'),
		gender: Yup.string().oneOf(['1', '0', '3'], 'Invalid Gender').required('Required'),
		agreeterms: Yup.boolean().oneOf([true], 'You must agree to terms of service').required('Required')
	});
	const onSubmit = (values) => {
		const { first_name, last_name, user_name, email, password, phone_number, address, gender } = values;
		const user = {
			first_name: first_name,
			last_name: last_name,
			user_name: user_name,
			email: email,
			password: password,
			phone_number: phone_number,
			address: address,
			gender: gender
		};
		registerThunk(user, history);
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
							<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
								<Form>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<InputFormik label="First name" id="first_name" name="first_name" type="text" />
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<InputFormik label="Last name" id="last_name" name="last_name" type="text" />
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<InputFormik
												label="User name"
												id="user_name"
												name="user_name"
												type="text"
												errors={reg.errors.user_name}
											/>
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<InputFormik label="Email" id="email" name="email" type="text" errors={reg.errors.email} />
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<InputFormik label="Password" id="password" name="password" type="password" />
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<InputFormik
												label="Confirm password"
												id="password_confirm"
												name="password_confirm"
												type="password"
											/>
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<InputFormik label="Phone number" id="phone_number" name="phone_number" type="text" />
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<InputFormik label="Address" id="address" name="address" type="text" />
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<SelectFormik label="Gender" name="gender">
												<option value="">Select gender</option>
												<option value="1">Male</option>
												<option value="0">Female</option>
												<option value="3">Other</option>
											</SelectFormik>
										</div>
									</div>
									<div className="control-group">
										<div className="custom-control custom-checkbox mb-3">
											<CheckBoxFormik label="Agree to terms of service" id="agreeterms" name="agreeterms" />
										</div>
									</div>
									<div className="text-center">
										{reg.loading ? (
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
										<p>
											By clicking <em>Register</em> you agree to our <a href="#!">terms of service</a>
										</p>
									</div>
								</Form>
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

Register.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
