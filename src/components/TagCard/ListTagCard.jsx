import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TagCard from './TagCard';
import Pagination from '../Pagination/Pagination';
import isEmpty from '../../helpers/isEmpty';
import { Container } from '../Styled/Wapper';
import { TagHeader, H1Tag, PTag, TagFeed } from '../Styled/TagCard';

const pageContext = {
	pageNumber: 0,
	humanPageNumber: 1,
	skip: 0,
	limit: 5,
	numberOfPages: 666,
	previousPagePath: '1',
	nextPagePath: '2'
};
const ListTagCard = ({ fetchTagThunk, fetchTagResetedThunk, fetchTag }) => {
	useEffect(() => {
		fetchTagThunk();
		return () => {
			fetchTagResetedThunk();
		};
	}, [fetchTagResetedThunk, fetchTagThunk]);
	return (
		<Container>
			{fetchTag.isLoading || isEmpty(fetchTag.tag) ? (
				'Loading................'
			) : (
				<>
					<TagHeader>
						<H1Tag>Tags</H1Tag>
						<PTag>All tags website</PTag>
					</TagHeader>
					<TagFeed>
						{fetchTag.tag.map((node) => (
							<TagCard key={node.id} tag={node} />
						))}
					</TagFeed>
					<Pagination pageContext={pageContext} />
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
