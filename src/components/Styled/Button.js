import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CssBtn = css`
	margin-top: 0.25rem;
	margin-bottom: 0.25rem;
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.75rem 1.5rem;
	border-radius: 0.75rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
	&:hover {
		text-decoration: none;
	}
	&:focus {
		outline: 0;
		box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
	}
`;
export const CssBtnType = css`
	color: #fff;
	${({ $typeBtn }) =>
		($typeBtn === 'primary' &&
			`
    background-color: #0d6efd;
    border-color: #0d6efd
`) ||
		($typeBtn === 'danger' &&
			`
    background-color: #dc3545;
    border-color: #dc3545;
`)}
	&:hover {
		color: #fff;
		${({ $typeBtn }) =>
			($typeBtn === 'primary' &&
				`
        background-color: #025ce2;
        border-color: #0257d5
    `) ||
			($typeBtn === 'danger' &&
				`
        background-color: #c82333;
        border-color: #bd2130;
    `)}
	}
	&:focus {
		color: #fff;
		${({ $typeBtn }) =>
			($typeBtn === 'primary' &&
				`
        background-color: #025ce2;
        border-color: #0257d5;
        box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
    `) ||
			($typeBtn === 'danger' &&
				`
        background-color:  #c82333;
        border-color:  #bd2130;
        box-shadow: 0 0 0 0.2rem rgba(225,83,97,.5);
    `)}
	}
	&:active,
	&.active {
		color: #fff;
		${({ $typeBtn }) =>
			($typeBtn === 'primary' &&
				`
            background-color: #025ce2;
            border-color: #0257d5
    `) ||
			($typeBtn === 'danger' &&
				`
            background-color: #c82333;
            border-color: #bd2130;
    `)}
	}
	&:active:focus,
	&.active:focus {
		${({ $typeBtn }) =>
			($typeBtn === 'primary' &&
				`
            box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
    `) ||
			($typeBtn === 'danger' &&
				`
            box-shadow: 0 0 0 0.2rem rgba(225,83,97,.5);
    `)}
	}
	&:disabled,
	&.disabled {
		color: #fff;
		${({ $typeBtn }) =>
			($typeBtn === 'primary' &&
				`
            background-color: #76b9ff;
            border-color: #76b9ff;
    `) ||
			($typeBtn === 'danger' &&
				`
            background-color: #e77883;
            border-color:  #e77883;
    `)}
	}
`;
export const CssFloat = css`
	${({ $fRight, $fLeft }) =>
		($fRight &&
			`
			float: right;
	`) ||
		($fLeft &&
			`
			float: left;
	`)}
`;
export const LinkBtnType = styled(Link)`
	${CssBtn}
	${CssBtnType}
	${CssFloat}
	margin-right: ${({ mRight }) => mRight || 0};
`;
export const ButtonBtnType = styled.button`
	${CssBtn}
	${CssBtnType}
	${CssFloat}
	margin-right: ${({ mRight }) => mRight || 0};
`;
