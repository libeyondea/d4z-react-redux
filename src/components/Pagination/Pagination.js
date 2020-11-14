import React from 'react';
import PropTypes from 'prop-types';
import { NavPagination, LinkPagination, DivPaginationLocation, APaginationNumber } from '../Styled/Pagination';

const Pagination = ({ previousPage, nextPage, filteredPages, currentPage, goToPage }) => {
	return (
		<NavPagination role="navigation">
			<div>
				<LinkPagination onClick={previousPage} rel="prev">
					Previous
				</LinkPagination>
			</div>
			<DivPaginationLocation>
				{[...Array(filteredPages)].map((value, index) => (
					<APaginationNumber
						key={index}
						className={`${currentPage === index + 1 ? 'isCurrent' : ''}`}
						aria-label="Page 1"
						onClick={() => goToPage(index + 1)}
						aria-current="page"
					>
						{index + 1}
					</APaginationNumber>
				))}
			</DivPaginationLocation>
			<div>
				<LinkPagination onClick={nextPage} rel="next">
					Next
				</LinkPagination>
			</div>
		</NavPagination>
	);
};

Pagination.propTypes = {
	previousPage: PropTypes.func.isRequired,
	nextPage: PropTypes.func.isRequired,
	filteredPages: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	goToPage: PropTypes.func.isRequired
};

export default Pagination;
