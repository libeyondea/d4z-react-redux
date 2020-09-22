import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/SideShow/SideShow';
import FetchPost from '../../components/Post/FetchPost';

const Home = () => {
	return (
		<MainLayout>
			<Header />
			<FetchPost />
		</MainLayout>
	);
};

export default Home;
