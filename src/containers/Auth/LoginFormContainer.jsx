import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputForm from '../../components/Form/InputForm';
import { Container } from '../../components/Styled/Wapper';
import { ButtonBtnType } from '../../components/Styled/Button';
import {
	DivLg8Md10Center,
	DivFormGroup,
	DivRememberForgot,
	DivCustomControl,
	InputCustomControlCheckBox,
	LabelCustomControlCheckBox,
	DivCenter,
	PCustom,
	FormTitleHeader,
	H1FormTileHeader,
	PFormTileHeader
} from '../../components/Styled/LoginForm';
import { connect } from 'react-redux';
import { loginThunk } from '../../thunks/authThunk';

const mapStateToProps = (state) => ({
	login: state.auth.login
});
const mapDispatchToProps = {
	loginThunk
};

const LoginFormContainer = ({ loginThunk, login }) => {
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
		<Container>
			<DivLg8Md10Center>
				<FormTitleHeader>
					<H1FormTileHeader>Login</H1FormTileHeader>
					<PFormTileHeader>Login your account</PFormTileHeader>
				</FormTitleHeader>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					<Form>
						<DivFormGroup>
							<InputForm
								label="Email"
								id="email"
								name="email"
								type="text"
								isError={login.isError}
								errorMessage={login.errorMessage.user}
							/>
						</DivFormGroup>
						<DivFormGroup>
							<InputForm
								label="Password"
								id="password"
								name="password"
								type="password"
								isError={login.isError}
								errorMessage={login.errorMessage.user}
							/>
						</DivFormGroup>
						<DivFormGroup>
							<DivRememberForgot>
								<DivCustomControl>
									<InputCustomControlCheckBox type="checkbox" id="remember" />
									<LabelCustomControlCheckBox htmlFor="remember">Remember</LabelCustomControlCheckBox>
								</DivCustomControl>
								<span>
									<a href="#!">Forgot password?</a>
								</span>
							</DivRememberForgot>
						</DivFormGroup>
						<DivCenter>
							{login.isLoading ? (
								<ButtonBtnType $typeBtn="primary" type="submit" className="btn btn-primary" disabled>
									Loading...
								</ButtonBtnType>
							) : (
								<ButtonBtnType $typeBtn="primary" type="submit" className="btn btn-primary">
									Login
								</ButtonBtnType>
							)}
							<PCustom mT="3rem" mB="1.5rem">
								Not a member? <Link to="/register">Register</Link>
							</PCustom>
						</DivCenter>
					</Form>
				</Formik>
			</DivLg8Md10Center>
		</Container>
	);
};

LoginFormContainer.propTypes = {
	loginThunk: PropTypes.func.isRequired,
	login: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
