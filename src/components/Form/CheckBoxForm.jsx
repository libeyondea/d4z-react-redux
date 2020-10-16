import React from 'react';
import { useField } from 'formik';
import { InputCustomControlCheckBox, LabelCustomControlCheckBox, DivInvalidFeedback } from '../Styled/LoginForm';

const CheckBoxForm = ({ isError, errorMessage, label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<InputCustomControlCheckBox {...field} {...props} type="checkbox" />
			<LabelCustomControlCheckBox htmlFor={props.id || props.name}>{label}</LabelCustomControlCheckBox>
			{meta.touched && meta.error && <DivInvalidFeedback>{meta.error}</DivInvalidFeedback>}
			{isError && errorMessage && <DivInvalidFeedback>{errorMessage}</DivInvalidFeedback>}
		</>
	);
};

export default CheckBoxForm;
