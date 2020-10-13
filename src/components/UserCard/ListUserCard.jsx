import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import Pagination from '../Pagination/Pagination';
import UserCard from './UserCard';

const pageContext = {
	pageNumber: 0,
	humanPageNumber: 1,
	skip: 0,
	limit: 5,
	numberOfPages: 666,
	previousPagePath: '1',
	nextPagePath: '2'
};
const propTypes = {
	fetchUserThunk: PropTypes.func.isRequired,
	fetchUserResetedThunk: PropTypes.func.isRequired
};
const ListUserCard = ({ fetchUserThunk, fetchUserResetedThunk, fetchUser }) => {
	useEffect(() => {
		fetchUserThunk();
		return () => {
			fetchUserResetedThunk();
		};
	}, [fetchUserResetedThunk, fetchUserThunk]);
	return (
		<div className="container">
			{fetchUser.isLoading || isEmpty(fetchUser.user) ? (
				'Loading...........'
			) : (
				<>
					<header className="user-header">
						<h1>Users</h1>
					</header>
					<section className="user-feed">
						{fetchUser.user.map((node) => (
							<UserCard key={node.id} user={node} />
						))}
					</section>
					<Pagination pageContext={pageContext} />
				</>
			)}
		</div>
	);
};

ListUserCard.propTypes = propTypes;

export default ListUserCard;
