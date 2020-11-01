import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PostCard from './PostCard';
import Pagination from '../Pagination/Pagination';
import isEmpty from '../../helpers/isEmpty';
import { Container } from '../Styled/Wapper';
import { PostFeed, SelectSortBy, DivFilter, InputSearch, DivSearch, DivSortBy } from '../Styled/PostCard';

const ListPostCard = ({
	fetchPostThunk,
	fetchPostResetedThunk,
	filterByValueThunk,
	nextPageThunk,
	previousPageThunk,
	goToPageThunk,
	sortByValueThunk,
	fetchPost
}) => {
	const [sortBy, setSortBy] = useState('');
	const handleSortByInput = (event) => {
		setSortBy(event.target.value);
		sortByValueThunk(event.target.value);
	};
	const handlePreviousPage = () => {
		previousPageThunk();
	};
	const handleNextPage = () => {
		nextPageThunk();
	};
	const handleFilterByInput = (event) => {
		filterByValueThunk(event.target.value);
	};
	useEffect(() => {
		fetchPostThunk();
		return () => {
			fetchPostResetedThunk();
		};
	}, [fetchPostResetedThunk, fetchPostThunk]);

	return (
		<Container>
			<Helmet>
				<title>Home | De4th Zone</title>
				<meta name="description" content="De4th Zone" />
			</Helmet>
			<DivFilter>
				<DivSearch>
					<InputSearch type="text" placeholder="Search..." onChange={handleFilterByInput} />
				</DivSearch>
				<DivSortBy>
					<SelectSortBy value={sortBy} name="sortBy" onChange={handleSortByInput}>
						<option value="" disabled>
							Sort by
						</option>
						<option value="title_asc">Title - A-Z</option>
						<option value="title_desc">Title - Z-A</option>
						<option value="created_at_asc">Created at - Asc</option>
						<option value="created_at_desc">Created at - Desc</option>
					</SelectSortBy>
				</DivSortBy>
			</DivFilter>
			{fetchPost.isLoading ? (
				'Loading..............'
			) : (
				<>
					{isEmpty(fetchPost.filteredPost) ? (
						'Empty..............'
					) : (
						<>
							<PostFeed>
								{fetchPost.filteredPost.map((node) => (
									<PostCard post={node} key={node.id} />
								))}
							</PostFeed>
							{fetchPost.filteredPages > 1 && (
								<Pagination
									previousPage={handlePreviousPage}
									nextPage={handleNextPage}
									filteredPages={fetchPost.filteredPages}
									currentPage={fetchPost.currentPage}
									goToPage={goToPageThunk}
								/>
							)}
						</>
					)}
				</>
			)}
		</Container>
	);
};

ListPostCard.propTypes = {
	fetchPost: PropTypes.shape({
		post: PropTypes.array
	}).isRequired
};

export default ListPostCard;
