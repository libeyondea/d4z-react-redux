import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const SelectInputFormik = ({ errored, touched, errors, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Select
				{...props}
				className={classnames('form-control-react-select', {
					'is-invalid-react-select': (errored && touched) || errors
				})}
				placeholder={label}
				isMulti={true}
				components={animatedComponents}
				closeMenuOnSelect={false}
				isOpen={true}
			/>
			{errored && touched && <div className="invalid-feedback d-block">{errored}</div>}
			{errors && <div className="invalid-feedback d-block">{errors}</div>}
		</>
	);
};

export default SelectInputFormik;
