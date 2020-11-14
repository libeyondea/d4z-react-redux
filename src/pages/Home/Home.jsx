import React from 'react';
import LayoutContainer from '../../containers/Layout/LayoutContainer.jsx';
import FetchPostContainer from '../../containers/Post/FetchPostContainer';

const Home = () => {
	return (
		<LayoutContainer isHome={true}>
			<FetchPostContainer />
		</LayoutContainer>
	);
};

export default Home;
