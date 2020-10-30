import React from 'react';
import CreatableSelect from 'react-select/creatable';
import classnames from 'classnames';
import makeAnimated from 'react-select/animated';
import { LabelForm, DivInvalidFeedback } from '../Styled/LoginForm';

const animatedComponents = makeAnimated();
const CreateSelectInputForm = ({ errors, touched, isError, errorMessage, label, ...props }) => {
	return (
		<>
			<LabelForm htmlFor={props.id || props.name}>{label}</LabelForm>
			<CreatableSelect
				{...props}
				className={classnames('form-control-react-select', {
					'is-invalid-react-select': (errors && touched) || (isError && errorMessage)
				})}
				placeholder={label}
				components={animatedComponents}
				closeMenuOnSelect={false}
				isOpen={true}
				createOptionPosition="first"
			/>
			{errors && touched && <DivInvalidFeedback>{errors}</DivInvalidFeedback>}
			{isError && errorMessage && <DivInvalidFeedback>{errorMessage}</DivInvalidFeedback>}
		</>
	);
};

export default CreateSelectInputForm;
