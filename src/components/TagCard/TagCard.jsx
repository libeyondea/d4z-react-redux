import React from 'react';
import PropTypes from 'prop-types';
import {
	DivTagCard,
	HeaderTagCard,
	H2TagCardTitle,
	SectionTagCardexcerpt,
	FooterTagCardfooter,
	DivTagCardFooterLeft,
	DivTagCardFooterRight,
	LinkTagCardTitle
} from '../Styled/TagCard';

const TagCard = ({ tag }) => {
	return (
		<DivTagCard>
			<HeaderTagCard>
				<H2TagCardTitle>
					<LinkTagCardTitle to={`/tags/${tag.id}/${tag.slug}`}>{tag.title}</LinkTagCardTitle>
				</H2TagCardTitle>
			</HeaderTagCard>
			<SectionTagCardexcerpt>{tag.content}</SectionTagCardexcerpt>
			<FooterTagCardfooter>
				<DivTagCardFooterLeft>
					<span>{tag.total_post} posts</span>
				</DivTagCardFooterLeft>
				<DivTagCardFooterRight>
					<span>
						{tag.total_post_today} today
						{', '}
						{tag.total_post_week} this week
					</span>
				</DivTagCardFooterRight>
			</FooterTagCardfooter>
		</DivTagCard>
	);
};

TagCard.propTypes = {
	tag: PropTypes.shape({
		id: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		total_post: PropTypes.number.isRequired,
		total_post_today: PropTypes.number.isRequired,
		total_post_week: PropTypes.number.isRequired
	}).isRequired
};

export default TagCard;
