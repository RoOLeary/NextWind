import React from 'react';

import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

const Layout = ({ props, children }) => {
    
    return(
        <div className="nextWind_layout">
            <Nav />
            {children}
            <Footer />
        </div>

    )
} 

export default Layout; 