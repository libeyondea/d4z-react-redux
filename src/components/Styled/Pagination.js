import styled from 'styled-components';

export const NavPagination = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4vw 0 0;
`;
export const LinkPagination = styled.a`
	${NavPagination} & {
		display: inline-block;
		padding: 10px 15px;
		border: var(--color-border) 1px solid;
		color: var(--color-secondary);
		text-decoration: none;
		font-size: 1.4rem;
		line-height: 1em;
		border-radius: var(--radius);
		cursor: pointer;
	}
`;
export const APaginationNumber = styled.a`
	${NavPagination} & {
		//display: inline-block;
		padding: 10px 15px;
		border: var(--color-border) 1px solid;
		color: var(--color-secondary);
		text-decoration: none;
		font-size: 1.4rem;
		line-height: 1em;
		border-radius: var(--radius);
		float: left;
		margin-right: 3px;
		&.isCurrent {
			background-color: #025ce2 !important;
			border-color: #0257d5 !important;
			color: #fff !important;
		}
		cursor: pointer;
	}
`;
export const DivPaginationLocation = styled.div`
	//position: absolute;
	//left: 50%;
	//width: 100px;
	//margin-left: -50px;
	margin: 0 20px 0 20px;
	text-align: center;
	color: var(--color-secondary);
	font-size: 1.3rem;
`;
