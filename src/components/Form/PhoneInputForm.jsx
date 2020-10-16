import React from 'react';
import 'react-phone-input-2/lib/bootstrap.css';
import { LabelForm, PhoneInputFormControl, DivInvalidFeedback } from '../Styled/LoginForm';

const PhoneInputFormik = ({ touched, errors, isError, errorMessage, label, ...props }) => {
	return (
		<>
			<LabelForm htmlFor={props.id || props.name}>{label}</LabelForm>
			<PhoneInputFormControl
				{...props}
				isInValid={((touched && errors) || (isError && errorMessage)) && true}
				enableSearch={true}
				enableTerritories={true}
			/>
			{touched && errors && <DivInvalidFeedback>{errors}</DivInvalidFeedback>}
			{isError && errorMessage && <DivInvalidFeedback>{errorMessage}</DivInvalidFeedback>}
		</>
	);
};

export default PhoneInputFormik;
