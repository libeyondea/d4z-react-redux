import React from 'react';
import classnames from 'classnames';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const PhoneInputFormik = ({ touched, errored, errors, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<PhoneInput
				{...props}
				inputClass={classnames('form-control', {
					'is-invalid': (errored && touched) || errors
				})}
				enableSearch={true}
				enableTerritories={true}
			/>
			{touched && errored && <div className="invalid-feedback d-block">{errored}</div>}
			{errors && <div className="invalid-feedback d-block">{errors}</div>}
		</>
	);
};

export default PhoneInputFormik;
