import React from 'react';
import { useField } from 'formik';
import classnames from 'classnames';

const TextareaFormik = ({ errors, label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<textarea
				{...field}
				{...props}
				className={classnames('form-control', {
					'is-invalid': (meta.touched && meta.error) || errors
				})}
				placeholder={label}
			/>
			{meta.touched && meta.error && <div className="invalid-feedback">{meta.error}</div>}
			{errors && <div className="invalid-feedback">{errors}</div>}
		</>
	);
};

export default TextareaFormik;
