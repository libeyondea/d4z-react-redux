import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import UserCard from '../../components/UserCard/UserCard';
import { DivSpinner } from '../../components/Styled/Spinners';
import { Container } from '../../components/Styled/Wapper';
import { UserHeader, SectionUserFeed, H1User } from '../../components/Styled/UserCard';
import { singleUserThunk, singleUserResetedThunk } from '../../thunks/userThunk';

const mapStateToProps = (state) => ({
	singleUser: state.users.singleUser,
	login: state.auth.login
});
const mapDispatchToProps = {
	singleUserThunk,
	singleUserResetedThunk
};
const SingleUserContainer = ({ singleUserThunk, singleUserResetedThunk, singleUser, login }) => {
	const { id, user_name } = useParams();
	useEffect(() => {
		singleUserThunk(id, user_name);
		return () => {
			singleUserResetedThunk();
		};
	}, [id, singleUserResetedThunk, singleUserThunk, user_name]);
	return (
		<Container>
			{singleUser.isLoading || isEmpty(singleUser.user) ? (
				<DivSpinner />
			) : (
				<>
					<UserHeader>
						<H1User>User Profile</H1User>
					</UserHeader>
					<SectionUserFeed>
						<UserCard user={singleUser.user} />
					</SectionUserFeed>
				</>
			)}
		</Container>
	);
};

SingleUserContainer.propTypes = {
	singleUserThunk: PropTypes.func.isRequired,
	singleUserResetedThunk: PropTypes.func.isRequired,
	singleUser: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserContainer);
