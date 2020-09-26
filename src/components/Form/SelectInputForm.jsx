import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const SelectInputForm = ({ label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Select
				{...props}
				placeholder={label}
				isMulti={true}
				components={animatedComponents}
				closeMenuOnSelect={false}
			/>
		</>
	);
};

export default SelectInputForm;
