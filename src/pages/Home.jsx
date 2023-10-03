import React from 'react';
import Hero from "../components/Hero/Hero.jsx";
import Present from "../components/Present/Present.jsx";
import Popular from "../components/Popular/Popular.jsx";
import Info from "../components/Info/Info.jsx";
import News from "../components/News/News.jsx";
import Delivery from "../components/Delivery/Delivery.jsx";
import Contacts from "../components/Contacts/Contacts.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
    return (
        <>
         <Hero/>
         <Present/>
         <Popular/>
         <Info/>
         <News/>
         <Delivery/>
         <Contacts/>
         <Footer/>
        </>
    );
};

export default Home;