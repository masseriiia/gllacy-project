import React from 'react';
import Header from "../components/Header/Header.jsx";
import Card from "../components/Card/Card.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Crumbs from "../components/Crumbs/Crumbs.jsx";
import Filter from "../components/Filter/Filter.jsx";



const Catalog = () => {
    return (
        <>
         <Header/>
         <Crumbs/>
         <Filter/>
         <Card/>
         <Footer/>
        </>
    );
};

export default Catalog;