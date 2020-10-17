import React from 'react';
import PropTypes from 'prop-types';
import {
	DivUserCard,
	AuthorHeader,
	DivAuthorHeaderContent,
	LinkAuthorName,
	DivAuthorHeaderMeta,
	AAuthorHeaderItem,
	DivAuthorHeaderImage
} from '../Styled/UserCard';

const UserCard = ({ user, isProfile }) => {
	return (
		<DivUserCard>
			<AuthorHeader>
				<DivAuthorHeaderContent>
					{isProfile ? (
						<h1>
							{user.first_name} {user.last_name}
						</h1>
					) : (
						<h1>
							<LinkAuthorName to={`/users/${user.id}/${user.user_name}`}>
								{user.last_name} {user.first_name}
							</LinkAuthorName>
						</h1>
					)}
					{user.address && <p>{user.address}</p>}
					<DivAuthorHeaderMeta>
						{user && (
							<AAuthorHeaderItem href={'/'} target="_blank" rel="noopener noreferrer">
								Website
							</AAuthorHeaderItem>
						)}
						{user && (
							<AAuthorHeaderItem href={'/'} target="_blank" rel="noopener noreferrer">
								Twitter
							</AAuthorHeaderItem>
						)}
						{user && (
							<AAuthorHeaderItem href={'/'} target="_blank" rel="noopener noreferrer">
								Facebook
							</AAuthorHeaderItem>
						)}
					</DivAuthorHeaderMeta>
				</DivAuthorHeaderContent>
				<DivAuthorHeaderImage>{user.image && <img src={user.image} alt={user.user_name} />}</DivAuthorHeaderImage>
			</AuthorHeader>
		</DivUserCard>
	);
};

UserCard.propTypes = {
	user: PropTypes.shape({
		first_name: PropTypes.string.isRequired,
		last_name: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		user_name: PropTypes.string.isRequired
	}).isRequired,
	isProfile: PropTypes.bool
};

export default UserCard;
