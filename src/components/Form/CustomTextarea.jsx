import React from 'react';
import classnames from 'classnames';

const CustomTextarea = ({ register, error, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id}>{label}</label>
			<textarea
				{...props}
				placeholder={`Enter ${label}`}
				className={classnames('form-control', {
					'is-invalid': error
				})}
				ref={register}
			></textarea>
			{error && <div className="invalid-feedback">{error.message}</div>}
		</>
	);
};

export default CustomTextarea;
