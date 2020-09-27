import React from 'react';
import classnames from 'classnames';

const TextareaForm = ({ valid, errors, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<textarea
				{...props}
				className={classnames('form-control', {
					'is-invalid': valid || errors
				})}
				placeholder={label}
			/>
			{valid && <div className="invalid-feedback">{valid}</div>}
			{errors && <div className="invalid-feedback">{errors}</div>}
		</>
	);
};

export default TextareaForm;
