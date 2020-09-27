import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const SelectInputForm = ({ valid, errors, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Select {...props} placeholder={label} isMulti={true} components={animatedComponents} closeMenuOnSelect={false} />
			{valid && <div className="invalid-feedback d-block">{valid}</div>}
			{errors && <div className="invalid-feedback d-block">{errors}</div>}
		</>
	);
};

export default SelectInputForm;
