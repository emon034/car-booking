import React from 'react';
import AppNavber from './app-navber';
import Footer from './footer';

const Layout = (props) => {
    return (
        <>
            <AppNavber/>
            {props.children}
            <Footer/>
        </>
    );
}

export default Layout;