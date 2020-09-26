import React from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const CreateSelectFieldForm = ({ label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<CreatableSelect
				{...props}
				placeholder={label}
				isMulti={true}
				components={animatedComponents}
				closeMenuOnSelect={false}
			/>
		</>
	);
};

export default CreateSelectFieldForm;
