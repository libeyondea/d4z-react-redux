import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import UserCard from './UserCard';
import { Container } from '../Styled/Wapper';
import { UserHeader, SectionUserFeed, H1User } from '../Styled/UserCard';

const propTypes = {
	singleUserThunk: PropTypes.func.isRequired,
	singleUserResetedThunk: PropTypes.func.isRequired,
	singleUser: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired
};
const DetailUserCard = ({ singleUserThunk, singleUserResetedThunk, singleUser, login }) => {
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
				'Loading.........'
			) : (
				<>
					<UserHeader>
						<H1User>User Profile</H1User>
					</UserHeader>
					<SectionUserFeed>
						<UserCard user={singleUser.user} isProfile={true} />
					</SectionUserFeed>
				</>
			)}
		</Container>
	);
};

DetailUserCard.propTypes = propTypes;

export default DetailUserCard;
