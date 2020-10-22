import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PostCard from './PostCard';
import Pagination from '../Pagination/Pagination';
import isEmpty from '../../helpers/isEmpty';
import { Container } from '../Styled/Wapper';
import { PostFeed, SelectSortBy, DivFilter, InputSearch, DivSearch, DivSortBy } from '../Styled/PostCard';

const pageContext = {
	pageNumber: 0,
	humanPageNumber: 1,
	skip: 0,
	limit: 5,
	numberOfPages: 666,
	previousPagePath: '1',
	nextPagePath: '2'
};
const ListPostCard = ({ fetchPostThunk, fetchPostResetedThunk, fetchPost, filterByPostThunk, sortByPostThunk }) => {
	const [sortBy, setSortBy] = useState('');
	useEffect(() => {
		fetchPostThunk();
		return () => {
			fetchPostResetedThunk();
		};
	}, [fetchPostResetedThunk, fetchPostThunk]);
	const handleSortByPost = (event) => {
		sortByPostThunk(event.target.value);
		setSortBy(event.target.value);
	};
	const handleFilterByPost = (event) => {
		filterByPostThunk(event.target.value);
	};
	return (
		<Container>
			<Helmet>
				<title>Home | De4th Zone</title>
				<meta name="description" content="De4th Zone" />
			</Helmet>
			<DivFilter>
				<DivSearch>
					<InputSearch type="text" placeholder="Search..." onChange={handleFilterByPost} />
				</DivSearch>
				<DivSortBy>
					<SelectSortBy value={sortBy} name="sortBy" onChange={handleSortByPost}>
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
			{fetchPost.isLoading || isEmpty(fetchPost.filteredPost) ? (
				'Loading................'
			) : (
				<>
					<PostFeed>
						{fetchPost.filteredPost.map((node) => (
							<PostCard key={node.id} post={node} />
						))}
					</PostFeed>
					<Pagination pageContext={pageContext} />
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
