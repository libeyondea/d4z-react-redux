import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../helpers/isEmpty';
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
					<div>
						{tag.total_post_today} today
						{', '}
						{tag.total_post_week} week
					</div>
				</DivTagCardFooterRight>
			</FooterTagCardfooter>
		</DivTagCard>
	);
};

TagCard.propTypes = {
	tag: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string,
		tag: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				title: PropTypes.string
			})
		),
		summary: PropTypes.string.isRequired,
		user: PropTypes.shape({
			user_name: PropTypes.string.isRequired,
			image: PropTypes.string
		}).isRequired
	}).isRequired
};

export default TagCard;
