import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import Pagination from '../Pagination/Pagination';
import UserCard from './UserCard';
import { Container } from '../Styled/Wapper';
import { UserHeader, SectionUserFeed, H1User } from '../Styled/UserCard';

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
		<Container>
			{fetchUser.isLoading ? (
				'Loading...........'
			) : (
				<>
					<UserHeader>
						<H1User>Users</H1User>
					</UserHeader>
					{isEmpty(fetchUser.user) ? (
						'Empty................'
					) : (
						<SectionUserFeed>
							{fetchUser.user.map((node) => (
								<UserCard key={node.id} user={node} />
							))}
						</SectionUserFeed>
					)}
				</>
			)}
		</Container>
	);
};

ListUserCard.propTypes = propTypes;

export default ListUserCard;
