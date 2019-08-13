import React, { Component } from 'react';

import './Home.css';
import Home from './Home';
import SlideShow from './SlideShow';
import Footer from './footer';

const HomeDashboard = () => {
    return (
        <div>
            <Home />
            <SlideShow />
            <Footer />
        </div>
    );
}
export default HomeDashboard;