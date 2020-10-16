import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import makeAnimated from 'react-select/animated';
import { LabelForm, DivInvalidFeedback } from '../Styled/LoginForm';

const animatedComponents = makeAnimated();
const SelectInputFormik = ({ errors, touched, isError, errorMessage, label, ...props }) => {
	return (
		<>
			<LabelForm htmlFor={props.id || props.name}>{label}</LabelForm>
			<Select
				{...props}
				className={classnames('form-control-react-select', {
					'is-invalid-react-select': (errors && touched) || (isError && errorMessage)
				})}
				placeholder={label}
				isMulti={true}
				components={animatedComponents}
				closeMenuOnSelect={false}
				isOpen={true}
			/>
			{errors && touched && <DivInvalidFeedback>{errors}</DivInvalidFeedback>}
			{isError && errorMessage && <DivInvalidFeedback>{errorMessage}</DivInvalidFeedback>}
		</>
	);
};

export default SelectInputFormik;
