import styled, { keyframes } from 'styled-components';

const spinnerBorder = keyframes`
   0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const DivSpinner = styled.div`
	display: inline-block;
	width: 5rem;
	height: 5rem;
	vertical-align: text-bottom;
	border: 0.5em solid currentColor;
	border-right-color: transparent;
	border-radius: 50%;
	animation: ${spinnerBorder} 0.75s linear infinite;
	color: ${({ textColor }) => textColor || '#007bff'};
`;
