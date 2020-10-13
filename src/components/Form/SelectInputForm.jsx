import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const SelectInputFormik = ({ errors, touched, isError, errorMessage, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
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
			{errors && touched && <div className="invalid-feedback d-block">{errors}</div>}
			{isError && errorMessage && <div className="invalid-feedback d-block">{errorMessage}</div>}
		</>
	);
};

export default SelectInputFormik;
