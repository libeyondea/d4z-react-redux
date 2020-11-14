import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TagCard from '../../components/TagCard/TagCard';
import isEmpty from '../../helpers/isEmpty';
import { Container } from '../../components/Styled/Wapper';
import { TagHeader, H1Tag, PTag, TagFeed } from '../../components/Styled/TagCard';
import { DivSpinner } from '../../components/Styled/Spinners';
import { fetchTagThunk, fetchTagResetedThunk } from '../../thunks/tagThunk';

const mapStateToProps = (state) => ({
	fetchTag: state.tags.fetchTag
});
const mapDispatchToProps = {
	fetchTagThunk,
	fetchTagResetedThunk
};
const FetchTagContainer = ({ fetchTagThunk, fetchTagResetedThunk, fetchTag }) => {
	useEffect(() => {
		fetchTagThunk();
		return () => {
			fetchTagResetedThunk();
		};
	}, [fetchTagResetedThunk, fetchTagThunk]);
	return (
		<Container>
			{fetchTag.isLoading ? (
				<DivSpinner />
			) : (
				<>
					{fetchTag.isError ? (
						<div>{fetchTag.errorMessage}</div>
					) : (
						<>
							<TagHeader>
								<H1Tag>Tags</H1Tag>
								<PTag>All tags</PTag>
							</TagHeader>
							{isEmpty(fetchTag.tag) ? (
								<div>No tags</div>
							) : (
								<TagFeed>
									{fetchTag.tag.map((node) => (
										<TagCard key={node.id} tag={node} />
									))}
								</TagFeed>
							)}
						</>
					)}
				</>
			)}
		</Container>
	);
};

FetchTagContainer.propTypes = {
	fetchTag: PropTypes.shape({
		tag: PropTypes.array
	}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchTagContainer);
