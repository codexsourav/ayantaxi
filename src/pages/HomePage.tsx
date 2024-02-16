import React from 'react';
import TopHeader from '../components/TopHeader';
import Navbar from '../components/header/Navbar';
import Header from '../components/header/Header';
import AboutUs from '../components/basic/AboutUs';
import Services from '../components/basic/Services';
import Faqs from '../components/basic/Faqs';
import CallSection from '../components/basic/CallSection';
import Blogs from '../components/basic/Blogs';
import Fottet from '../components/basic/Fottet';

const HomePage = () => {
    return (
        <>
            <TopHeader />
            <Navbar />
            <Header />
            <AboutUs />
            <Services />
            <Faqs />
            <CallSection />
            <Blogs />
            <Fottet />
        </>
    );
};

export default React.memo(HomePage);