import React from 'react';
import { useField } from 'formik';
import { LabelForm, SelectFormControl, DivInvalidFeedback } from '../Styled/LoginForm';

const SelectFormik = ({ isError, errorMessage, label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<LabelForm htmlFor={props.id || props.name}>{label}</LabelForm>
			<SelectFormControl
				{...field}
				{...props}
				isInValid={((meta.touched && meta.error) || (isError && errorMessage)) && true}
			/>
			{meta.touched && meta.error && <DivInvalidFeedback>{meta.error}</DivInvalidFeedback>}
			{isError && errorMessage && <DivInvalidFeedback>{errorMessage}</DivInvalidFeedback>}
		</>
	);
};

export default SelectFormik;
