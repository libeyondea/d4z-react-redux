import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PostCard from '../../components/PostCard/PostCard';
import Pagination from '../../components/Pagination/Pagination';
import { DivSpinner } from '../../components/Styled/Spinners';
import isEmpty from '../../helpers/isEmpty';
import { Container } from '../../components/Styled/Wapper';
import { PostFeed, SelectSortBy, DivFilter, InputSearch, DivSearch, DivSortBy } from '../../components/Styled/PostCard';
import {
	fetchPostThunk,
	fetchPostResetedThunk,
	filterByValueThunk,
	nextPageThunk,
	previousPageThunk,
	goToPageThunk,
	sortByValueThunk
} from '../../thunks/postThunk';

const mapStateToProps = (state) => ({
	fetchPost: state.posts.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk,
	fetchPostResetedThunk,
	filterByValueThunk,
	nextPageThunk,
	previousPageThunk,
	goToPageThunk,
	sortByValueThunk
};

const FetchPostContainer = ({
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
				<DivSpinner />
			) : (
				<>
					{fetchPost.isError ? (
						<div>{fetchPost.errorMessage}</div>
					) : (
						<>
							{isEmpty(fetchPost.filteredPost) ? (
								<div>No posts</div>
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
				</>
			)}
		</Container>
	);
};

FetchPostContainer.propTypes = {
	fetchPost: PropTypes.shape({
		post: PropTypes.array
	}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchPostContainer);
