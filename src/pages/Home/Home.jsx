import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import SideShow from '../../components/SideShow/SideShow';
import FetchPost from '../../components/Post/FetchPost';

const Home = () => {
	return (
		<MainLayout>
			<SideShow />
			<FetchPost />
		</MainLayout>
	);
};

export default Home;
