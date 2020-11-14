import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	DivUserCard,
	DivUserGravatar,
	DivUserGravatarWrapper,
	DivUserDetails,
	DivUserTags,
	SpanUserLocation,
	DivUserCountPost
} from '../Styled/UserCard';

const UserCard = ({ user }) => {
	return (
		<DivUserCard>
			<DivUserGravatar>
				<Link to={`/users/${user.id}/${user.user_name}`}>
					<DivUserGravatarWrapper>
						{user.image && <img width={66} height={66} src={user.image} alt={user.user_name} />}
					</DivUserGravatarWrapper>
				</Link>
			</DivUserGravatar>
			<DivUserDetails>
				<h2>
					<Link to={`/users/${user.id}/${user.user_name}`}>
						{user.last_name} {user.first_name}
					</Link>
				</h2>
				{user.address && <SpanUserLocation>{user.address}</SpanUserLocation>}
				<DivUserCountPost>
					<span>666 posts</span>
				</DivUserCountPost>
			</DivUserDetails>
			<DivUserTags>
				<Link to="/tags/regex">c++</Link>
				{', '}
				<Link to="/tags/python">python</Link>
				{', '}
				<Link to="/tags/javascript">javascript</Link>
			</DivUserTags>
		</DivUserCard>
	);
};

UserCard.propTypes = {
	user: PropTypes.shape({
		first_name: PropTypes.string.isRequired,
		last_name: PropTypes.string.isRequired,
		address: PropTypes.string,
		image: PropTypes.string.isRequired,
		user_name: PropTypes.string.isRequired
	}).isRequired
};

export default UserCard;
