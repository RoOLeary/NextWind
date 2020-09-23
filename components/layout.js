import React from 'react';
import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';
import ProgressScroller from './progressScroller';

const Layout = ({ children }) => {
    
    return(
        <div className="nextWind_layout">
            <ProgressScroller />
            <Nav />
            {children}
            <Footer />
        </div>

    )
} 

export default Layout; 