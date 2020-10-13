import React from 'react';
import { useField } from 'formik';
import classnames from 'classnames';

const InuputFormik = ({ isError, errorMessage, label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input
				{...field}
				{...props}
				className={classnames('form-control', {
					'is-invalid': (meta.touched && meta.error) || (isError && errorMessage)
				})}
				placeholder={label}
			/>
			{meta.touched && meta.error && <div className="invalid-feedback">{meta.error}</div>}
			{isError && errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
		</>
	);
};

export default InuputFormik;
