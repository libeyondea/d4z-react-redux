import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavPagination = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4vw 0 0;
`;
const LinkPagination = styled(Link)`
	${NavPagination} & {
		display: inline-block;
		padding: 10px 15px;
		border: var(--color-border) 1px solid;
		color: var(--color-secondary);
		text-decoration: none;
		font-size: 1.4rem;
		line-height: 1em;
		border-radius: var(--radius);
	}
`;
const DivPaginationLocation = styled.div`
	position: absolute;
	left: 50%;
	width: 100px;
	margin-left: -50px;
	text-align: center;
	color: var(--color-secondary);
	font-size: 1.3rem;
`;

const Pagination = ({ pageContext }) => {
	const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext;

	return (
		<NavPagination role="navigation">
			<div>
				{previousPagePath && (
					<LinkPagination to={previousPagePath} rel="prev">
						Previous
					</LinkPagination>
				)}
			</div>
			{numberOfPages > 1 && (
				<DivPaginationLocation>
					Page {humanPageNumber} of {numberOfPages}
				</DivPaginationLocation>
			)}
			<div>
				{nextPagePath && (
					<LinkPagination to={nextPagePath} rel="next">
						Next
					</LinkPagination>
				)}
			</div>
		</NavPagination>
	);
};

Pagination.propTypes = {
	pageContext: PropTypes.object.isRequired
};

export default Pagination;
