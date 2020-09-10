import React from 'react';
import Header from '../Layouts/Header';
import FetchPost from '../Posts/FetchPost';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <FetchPost />
        </React.Fragment>
    )
}

export default Home;