import React from 'react';
import classnames from 'classnames';

const TextareaForm = ({ errors, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input
				{...props}
				className={classnames('form-control', {
					'is-invalid': errors
				})}
				placeholder={label}
			/>
			{errors && <div className="invalid-feedback">{errors}</div>}
		</>
	);
};

export default TextareaForm;
