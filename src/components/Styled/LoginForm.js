import styled from 'styled-components';
import React from 'react';
import PhoneInput from 'react-phone-input-2';

export const DivLg8Md10Center = styled.div`
	margin-left: auto;
	margin-right: auto;
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	@media (min-width: 992px) {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
	@media (min-width: 768px) {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
`;
export const DivFormGroup = styled.div`
	margin-bottom: 1.5rem;
`;
export const LabelForm = styled.label`
	display: inline-block;
	margin-bottom: 0.5rem;
`;
export const InputFormControl = styled.input`
	display: block;
	width: 100%;
	padding: 1rem 1.25rem;
	line-height: 1.5;
	color: #495057;
	${({ readOnly }) =>
		readOnly
			? `
            background-color: #d3d3d3;
    		`
			: `background-color: #fff;`}
	background-clip: padding-box;
	border: 1px solid ${({ isInValid }) => (isInValid && `#dc3545`) || `#ced4da`};
	border-radius: 0.75rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	&:focus {
		color: #495057;
		${({ readOnly }) =>
			readOnly
				? `
            background-color: #d3d3d3;
    		`
				: `background-color: #fff;`}
		border-color: ${({ isInValid }) => (isInValid && `#dc3545`) || `#80bdff`};
		outline: 0;
		box-shadow: ${({ isInValid }) =>
			(isInValid && `0 0 0 0.3rem rgba(220,53,69,.25)`) || `0 0 0 0.3rem rgba(0, 123, 255, 0.25)`};
	}
`;
export const SelectFormControl = styled(InputFormControl).attrs({
	as: 'select'
})``;
export const TextAreaFormControl = styled(InputFormControl).attrs({
	as: 'textarea'
})``;
export const RichTXTFormControl = styled.div`
	& .tox-tinymce {
		border-color: ${({ isInValid }) => (isInValid && `#dc3545`) || `#ced4da`};
	}
`;
export const ClassNamePhoneInput = ({ className, ...props }) => <PhoneInput containerClass={className} {...props} />;
export const PhoneInputFormControl = styled(ClassNamePhoneInput)`
	& > input {
		display: block;
		width: 100% !important;
		padding: 1rem 14px 1.25rem 63px !important;
		line-height: 1.5;
		color: #495057;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid ${({ isInValid }) => (isInValid && `#dc3545`) || `#ced4da`} !important;
		border-radius: 0.75rem;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		&:focus {
			color: #495057;
			background-color: #fff;
			border-color: ${({ isInValid }) => (isInValid && `#dc3545`) || `#80bdff`} !important;
			outline: 0;
			box-shadow: ${({ isInValid }) =>
				(isInValid && `0 0 0 0.3rem rgba(220,53,69,.25)`) || `0 0 0 0.3rem rgba(0, 123, 255, 0.25)`} !important;
		}
	}
	& .country-list {
		max-width: none;
		margin: 5px 0 10px -1px;
		li {
			margin: 0;
		}
		.search {
			box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
				0px 1px 10px 0px rgba(0, 0, 0, 0.12);
		}
	}
`;
export const DivInvalidFeedback = styled.div`
	width: 100%;
	margin-top: 0.25rem;
	font-size: 80%;
	color: #dc3545;
`;
export const DivRememberForgot = styled.div`
	margin-bottom: 1rem;
	align-items: center;
	justify-content: space-between;
	display: flex;
`;
export const DivCustomControl = styled.div`
	position: relative;
	z-index: 1;
	display: block;
	min-height: 1.5rem;
`;
export const InputCustomControlCheckBox = styled.input`
	box-sizing: border-box;
	padding: 0;
	margin-top: 0.3rem;
	margin-right: 0.75rem;
`;
export const LabelCustomControlCheckBox = styled.label`
	position: relative;
	margin-bottom: 0;
	vertical-align: top;
`;
export const DivCenter = styled.div`
	text-align: center;
`;
export const PCustom = styled.p`
	margin: ${({ mT }) => mT || 0} ${({ mR }) => mR || 0} ${({ mB }) => mB || 0} ${({ mL }) => mL || 0};
`;
export const FormTitleHeader = styled.header`
	margin: 0 0 4vw;
	text-align: center;
	@media (max-width: 500px) {
		border-bottom: var(--color-bg) 1px solid;
		padding-bottom: 4vw;
	}
`;
export const H1FormTileHeader = styled.h1`
	${FormTitleHeader} & {
		margin: 0 0 1rem 0;
	}
`;
export const PFormTileHeader = styled.p`
	${FormTitleHeader} & {
		margin: 0;
		color: var(--color-secondary);
		font-size: 2.2rem;
		line-height: 1.3em;
	}
	@media (max-width: 500px) {
		${FormTitleHeader} & {
			font-size: 1.7rem;
		}
	}
`;
