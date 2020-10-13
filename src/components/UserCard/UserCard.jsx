import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserCard = ({ user, isProfile }) => {
	return (
		<div className="user-card">
			<header className="author-header">
				<div className="author-header-content">
					{isProfile ? (
						<h1>
							{user.first_name} {user.last_name}
						</h1>
					) : (
						<h1>
							<Link to={`/users/${user.id}/${user.user_name}`} className="author-name">
								{user.first_name} {user.last_name}
							</Link>
						</h1>
					)}
					{user.address && <p>{user.address}</p>}
					<div className="author-header-meta">
						{user && (
							<a className="author-header-item" href={'/'} target="_blank" rel="noopener noreferrer">
								Website
							</a>
						)}
						{user && (
							<a className="author-header-item" href={'/'} target="_blank" rel="noopener noreferrer">
								Twitter
							</a>
						)}
						{user && (
							<a className="author-header-item" href={'/'} target="_blank" rel="noopener noreferrer">
								Facebook
							</a>
						)}
					</div>
				</div>
				<div className="author-header-image">{user.image && <img src={user.image} alt={user.user_name} />}</div>
			</header>
		</div>
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
