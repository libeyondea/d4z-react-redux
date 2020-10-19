import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PostCard from './PostCard';
import Pagination from '../Pagination/Pagination';
import isEmpty from '../../helpers/isEmpty';
import { Container } from '../Styled/Wapper';
import Test from './Test';
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
const ListPostCard = ({ fetchPostThunk, fetchPostResetedThunk, fetchPost, filterByPostThunk }) => {
	const [sortBy, setSortBy] = useState('');
	const [filterBy, setFilterBy] = useState('');
	const mounted = useRef();
	useEffect(() => {
		fetchPostThunk();
		console.log('mount');
		return () => {
			console.log('unmount');
			fetchPostResetedThunk();
		};
	}, [fetchPostResetedThunk, fetchPostThunk]);
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
		} else {
			fetchPostThunk(sortBy);
		}
	}, [fetchPostThunk, sortBy]);
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
		} else {
			filterByPostThunk(filterBy);
		}
	}, [filterBy, filterByPostThunk]);
	const handleSortByPost = (event) => {
		setSortBy(event.target.value);
	};
	const handleFilterByPost = (event) => {
		setFilterBy(event.target.value);
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
			{fetchPost.isLoading || isEmpty(fetchPost.post) ? (
				'Loading................'
			) : (
				<>
					<PostFeed>
						{fetchPost.post.map((node) => (
							<PostCard key={node.id} post={node} />
						))}
					</PostFeed>
					<Pagination pageContext={pageContext} />
				</>
			)}
			<Pagination pageContext={pageContext} />
		</Container>
	);
};

ListPostCard.propTypes = {
	fetchPost: PropTypes.shape({
		post: PropTypes.array
	}).isRequired
};

export default ListPostCard;
