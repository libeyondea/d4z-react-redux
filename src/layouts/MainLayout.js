import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = (props) => {
    const { children } = props;
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};
export default MainLayout;