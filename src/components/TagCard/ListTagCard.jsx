import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TagCard from './TagCard';
import isEmpty from '../../helpers/isEmpty';
import { Container } from '../Styled/Wapper';
import { TagHeader, H1Tag, PTag, TagFeed } from '../Styled/TagCard';

const ListTagCard = ({ fetchTagThunk, fetchTagResetedThunk, fetchTag }) => {
	useEffect(() => {
		fetchTagThunk();
		return () => {
			fetchTagResetedThunk();
		};
	}, [fetchTagResetedThunk, fetchTagThunk]);
	return (
		<Container>
			{fetchTag.isLoading ? (
				'Loading................'
			) : (
				<>
					<TagHeader>
						<H1Tag>Tags</H1Tag>
						<PTag>All tags website</PTag>
					</TagHeader>
					{isEmpty(fetchTag.tag) ? (
						'Empty................'
					) : (
						<TagFeed>
							{fetchTag.tag.map((node) => (
								<TagCard key={node.id} tag={node} />
							))}
						</TagFeed>
					)}
				</>
			)}
		</Container>
	);
};

ListTagCard.propTypes = {
	fetchTag: PropTypes.shape({
		tag: PropTypes.array
	}).isRequired
};

export default ListTagCard;
