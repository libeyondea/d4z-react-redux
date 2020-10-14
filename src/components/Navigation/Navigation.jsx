import React from 'react';
import PropTypes from 'prop-types';
import { ASiteFootNavItem, LinkSiteFootNavItem, ASiteNavItem, LinkSiteNavItem } from '../Styled/Layout';

const Navigation = ({ data, navTop }) => (
	<>
		{data.map((navItem, index) => {
			if (navItem.url.match(/^\s?http(s?)/gi)) {
				return navTop ? (
					<ASiteNavItem href={navItem.url} key={index} target="_blank" rel="noopener noreferrer">
						{navItem.label}
					</ASiteNavItem>
				) : (
					<ASiteFootNavItem href={navItem.url} key={index} target="_blank" rel="noopener noreferrer">
						{navItem.label}
					</ASiteFootNavItem>
				);
			} else {
				return navTop ? (
					<LinkSiteNavItem to={navItem.url} key={index}>
						{navItem.label}
					</LinkSiteNavItem>
				) : (
					<LinkSiteFootNavItem to={navItem.url} key={index}>
						{navItem.label}
					</LinkSiteFootNavItem>
				);
			}
		})}
	</>
);

Navigation.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	navTop: PropTypes.bool
};

export default Navigation;
