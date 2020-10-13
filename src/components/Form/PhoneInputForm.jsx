import React from 'react';
import classnames from 'classnames';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const PhoneInputFormik = ({ touched, errors, isError, errorMessage, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<PhoneInput
				{...props}
				inputClass={classnames('form-control', {
					'is-invalid': (errors && touched) || (isError && errorMessage)
				})}
				enableSearch={true}
				enableTerritories={true}
			/>
			{touched && errors && <div className="invalid-feedback d-block">{errors}</div>}
			{isError && errorMessage && <div className="invalid-feedback d-block">{errorMessage}</div>}
		</>
	);
};

export default PhoneInputFormik;
