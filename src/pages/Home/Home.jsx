import React from 'react';
import LayoutContainer from '../../containers/LayoutContainer.jsx';
import ListPostCardContainer from '../../containers/ListPostCardContainer';

const Home = () => {
	return (
		<LayoutContainer isHome={true}>
			<ListPostCardContainer />
		</LayoutContainer>
	);
};

export default Home;
