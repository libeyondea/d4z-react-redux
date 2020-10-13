import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
import UserCard from './UserCard';

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
		<div className="container">
			{singleUser.isLoading || isEmpty(singleUser.user) ? (
				'Loading.........'
			) : (
				<>
					<header className="user-header">
						<h1>User Profile</h1>
					</header>
					<section className="user-feed">
						<UserCard user={singleUser.user} isProfile={true} />
					</section>
				</>
			)}
		</div>
	);
};

DetailUserCard.propTypes = propTypes;

export default DetailUserCard;
