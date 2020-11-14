import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import InputForm from '../../components/Form/InputForm';
import SelectForm from '../../components/Form/SelectForm';
import CheckBoxForm from '../../components/Form/CheckBoxForm';
import PhoneInputForm from '../../components/Form/PhoneInputForm';
import { Container } from '../../components/Styled/Wapper';
import { ButtonBtnType } from '../../components/Styled/Button';
import {
	DivLg8Md10Center,
	DivFormGroup,
	DivCustomControl,
	DivCenter,
	PCustom,
	FormTitleHeader,
	H1FormTileHeader,
	PFormTileHeader
} from '../../components/Styled/LoginForm';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { registerThunk, registerResetedThunk } from '../../thunks/authThunk';

const mapStateToProps = (state) => ({
	register: state.auth.register
});
const mapDispatchToProps = {
	registerThunk,
	registerResetedThunk
};
const RegisterFormContainer = ({ registerThunk, register, registerResetedThunk }) => {
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
		image: '',
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
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email is required'),
		password: Yup.string().required('Password is required'),
		password_confirm: Yup.string()
			.required('Comfirm password is required')
			.oneOf([Yup.ref('password')], 'Password is not match'),
		phone_number: Yup.string()
			.min(10, 'Phone number must be at least 10 characters')
			.matches(/^[0-9]+$/),
		address: Yup.string()
			.min(6, 'Address must be at least 6 characters')
			.max(66, 'Address must be at most 66 characters'),
		image: Yup.string().max(300, 'Image must be at most 300 characters'),
		gender: Yup.string().oneOf(['male', 'female', 'orther'], 'Invalid Gender').required('Select gender'),
		agreeterms: Yup.boolean().oneOf([true], 'You must agree to terms of service').required('Required')
	});
	const onSubmit = (values) => {
		const user = {
			id: uuidv4(),
			first_name: values.first_name,
			last_name: values.last_name,
			user_name: values.user_name,
			email: values.email,
			password: values.password,
			phone_number: values.phone_number,
			address: values.address,
			gender: values.gender,
			image: values.image
		};
		registerThunk(user, history);
	};
	useEffect(() => {
		return () => {
			registerResetedThunk();
		};
	}, [registerResetedThunk]);
	return (
		<Container>
			<DivLg8Md10Center>
				<FormTitleHeader>
					<H1FormTileHeader>Register</H1FormTileHeader>
					<PFormTileHeader>Register new account now</PFormTileHeader>
				</FormTitleHeader>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					{({ values, errors, touched, handleSubmit, setFieldValue, setFieldTouched }) => (
						<form onSubmit={handleSubmit}>
							<DivFormGroup>
								<InputForm label="First name" id="first_name" name="first_name" type="text" />
							</DivFormGroup>
							<DivFormGroup>
								<InputForm label="Last name" id="last_name" name="last_name" type="text" />
							</DivFormGroup>
							<DivFormGroup>
								<InputForm
									label="User name"
									id="user_name"
									name="user_name"
									type="text"
									isError={register.isError}
									errorMessage={register.errorMessage.user_name}
								/>
							</DivFormGroup>
							<DivFormGroup>
								<InputForm
									label="Email"
									id="email"
									name="email"
									type="text"
									isError={register.isError}
									errorMessage={register.errorMessage.email}
								/>
							</DivFormGroup>
							<DivFormGroup>
								<InputForm label="Password" id="password" name="password" type="password" />
							</DivFormGroup>
							<DivFormGroup>
								<InputForm label="Confirm password" id="password_confirm" name="password_confirm" type="password" />
							</DivFormGroup>
							<DivFormGroup>
								<PhoneInputForm
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
									errors={errors.phone_number}
									touched={touched.phone_number}
								/>
							</DivFormGroup>
							<DivFormGroup>
								<InputForm label="Address" id="address" name="address" type="text" />
							</DivFormGroup>
							<DivFormGroup>
								<SelectForm label="Gender" name="gender">
									<option value="">Select gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="orther">Other</option>
								</SelectForm>
							</DivFormGroup>
							<DivFormGroup>
								<InputForm label="Image" id="image" name="image" type="text" />
							</DivFormGroup>
							<DivFormGroup>
								<DivCustomControl>
									<CheckBoxForm label="Agree to terms of service" id="agreeterms" name="agreeterms" />
								</DivCustomControl>
							</DivFormGroup>
							<DivCenter>
								{register.isLoading ? (
									<ButtonBtnType $typeBtn="primary" type="submit" disabled>
										Loading...
									</ButtonBtnType>
								) : (
									<ButtonBtnType $typeBtn="primary" type="submit">
										Register
									</ButtonBtnType>
								)}
								<hr />
								<PCustom>
									By clicking <em>Register</em> you agree to our <a href="#!">terms of service</a>
								</PCustom>
							</DivCenter>
						</form>
					)}
				</Formik>
			</DivLg8Md10Center>
		</Container>
	);
};

RegisterFormContainer.propTypes = {
	registerThunk: PropTypes.func.isRequired,
	register: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterFormContainer));
