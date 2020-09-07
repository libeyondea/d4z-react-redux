import React from 'react';
import Header from '../layouts/Header';
import FetchPost from '../posts/fetch/FetchPost';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <FetchPost />
        </React.Fragment>
    )
}

export default Home;