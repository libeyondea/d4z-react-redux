import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ data, navClass }) => (
	<>
		{data.map((navItem, index) => {
			if (navItem.url.match(/^\s?http(s?)/gi)) {
				return (
					<a className={navClass} href={navItem.url} key={index} target="_blank" rel="noopener noreferrer">
						{navItem.label}
					</a>
				);
			} else {
				return (
					<Link className={navClass} to={navItem.url} key={index}>
						{navItem.label}
					</Link>
				);
			}
		})}
	</>
);

Navigation.defaultProps = {
	navClass: `site-nav-item`
};

Navigation.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	navClass: PropTypes.string
};

export default Navigation;
