import React from 'react';
import classnames from 'classnames';

const CustomInput = ({ register, error, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id}>{label}</label>
			<input
				{...props}
				placeholder={`Enter ${label}`}
				className={classnames('form-control', {
					'is-invalid': error
				})}
				ref={register}
			></input>
			{error && <div className="invalid-feedback">{error.message}</div>}
		</>
	);
};

export default CustomInput;
