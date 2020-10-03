import React from 'react';
import { useHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerThunk } from '../../thunks/authThunk';
import MainLayout from '../../layouts/MainLayout';
import InputFormik from '../../components/Formik/InputFormik';
import SelectFormik from '../../components/Formik/SelectFormik';
import CheckBoxFormik from '../../components/Formik/CheckBoxFormik';
import PhoneInputFormik from '../../components/Formik/PhoneInputFormik';

const propTypes = {
	registerThunk: PropTypes.func.isRequired,
	register: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	register: state.auth.register
});
const mapDispatchToProps = {
	registerThunk
};
const Register = (props) => {
	const { registerThunk, register } = props;
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
		first_name: Yup.string()
			.min(1, 'Fisrt name must be at least 1 characters')
			.max(16, 'Fisrt name must be at most 16 characters')
			.required('First name is required'),
		last_name: Yup.string()
			.min(1, 'Last name must be at least 1 characters')
			.max(16, 'Last name must be at most 16 characters')
			.required('Last name is required'),
		user_name: Yup.string()
			.min(6, 'User name must be at least 6 characters')
			.max(16, 'User name must be at most 16 characters')
			.matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'User name invalid')
			.required('User name is required'),
		email: Yup.string()
			.matches(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email is required'),
		password: Yup.string().required('Password is required'),
		password_confirm: Yup.string()
			.required('Comfirm password is required')
			.oneOf([Yup.ref('password')], 'Password is not match'),
		phone_number: Yup.string()
			.min(10, 'Phone number must be at least 10 characters')
			.matches(/^[0-9]+$/)
			.required('Phone number is required'),
		address: Yup.string()
			.min(6, 'Address must be at least 6 characters')
			.max(66, 'Address must be at most 66 characters')
			.required('Address is required'),
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
			<header className="masthead" style={{ backgroundImage: 'url("assets/img/react.jpg")' }}>
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
								{({ values, errors, touched, handleSubmit, setFieldValue, setFieldTouched }) => (
									<form onSubmit={handleSubmit}>
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
													errors={register.errorMessage.user_name}
												/>
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<InputFormik
													label="Email"
													id="email"
													name="email"
													type="text"
													errors={register.errorMessage.email}
												/>
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
												<PhoneInputFormik
													label="Phone number"
													inputProps={{
														name: 'phone_number',
														id: 'phone_number'
													}}
													placeholder="84 336 077 131"
													country={'vn'}
													onChange={(value) => setFieldValue('phone_number', value)}
													onBlur={() => setFieldTouched('phone_number', true)}
													value={values.phone_number}
													errored={errors.phone_number}
													touched={touched.phone_number}
												/>
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
											{register.isLoading ? (
												<button type="submit" className="btn btn-primary" disabled>
													<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
													Loading...
												</button>
											) : (
												<button type="submit" className="btn btn-primary">
													Register
												</button>
											)}
											<p>or register with:</p>
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
											<hr className="mt-4" />
											<p>
												By clicking <em>Register</em> you agree to our <a href="#!">terms of service</a>
											</p>
										</div>
									</form>
								)}
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
