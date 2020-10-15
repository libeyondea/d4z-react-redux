import React from 'react';
import PropTypes from 'prop-types';
import { NavPagination, LinkPagination, DivPaginationLocation } from '../Styled/Pagination';

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
