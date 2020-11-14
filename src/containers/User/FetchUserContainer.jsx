import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import UserCard from '../../components/UserCard/UserCard';
import { DivSpinner } from '../../components/Styled/Spinners';
import { Container } from '../../components/Styled/Wapper';
import { UserHeader, SectionUserFeed, H1User, PUser } from '../../components/Styled/UserCard';
import { fetchUserThunk, fetchUserResetedThunk } from '../../thunks/userThunk';

const mapStateToProps = (state) => ({
	fetchUser: state.users.fetchUser
});
const mapDispatchToProps = {
	fetchUserThunk,
	fetchUserResetedThunk
};
const FetchUserContainer = ({ fetchUserThunk, fetchUserResetedThunk, fetchUser }) => {
	useEffect(() => {
		fetchUserThunk();
		return () => {
			fetchUserResetedThunk();
		};
	}, [fetchUserResetedThunk, fetchUserThunk]);
	return (
		<Container>
			{fetchUser.isLoading ? (
				<DivSpinner />
			) : (
				<>
					{fetchUser.isError ? (
						<div>{fetchUser.errorMessage}</div>
					) : (
						<>
							<UserHeader>
								<H1User>Users</H1User>
								<PUser>All users</PUser>
							</UserHeader>
							{isEmpty(fetchUser.user) ? (
								<div>No users</div>
							) : (
								<SectionUserFeed>
									{fetchUser.user.map((node) => (
										<UserCard key={node.id} user={node} />
									))}
								</SectionUserFeed>
							)}
						</>
					)}
				</>
			)}
		</Container>
	);
};

FetchUserContainer.propTypes = {
	fetchUserThunk: PropTypes.func.isRequired,
	fetchUserResetedThunk: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchUserContainer);
