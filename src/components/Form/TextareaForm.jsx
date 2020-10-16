import React from 'react';
import { useField } from 'formik';
import { LabelForm, TextAreaFormControl, DivInvalidFeedback } from '../Styled/LoginForm';

const TextareaFormik = ({ isError, errorMessage, label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<LabelForm htmlFor={props.id || props.name}>{label}</LabelForm>
			<TextAreaFormControl
				{...field}
				{...props}
				isInValid={((meta.touched && meta.error) || (isError && errorMessage)) && true}
				placeholder={label}
			/>
			{meta.touched && meta.error && <DivInvalidFeedback>{meta.error}</DivInvalidFeedback>}
			{isError && errorMessage && <DivInvalidFeedback>{errorMessage}</DivInvalidFeedback>}
		</>
	);
};

export default TextareaFormik;
