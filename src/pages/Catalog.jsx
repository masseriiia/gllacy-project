import React from 'react';
import Cards from "../components/Cards/Cards.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Crumbs from "../components/Crumbs/Crumbs.jsx";
import Filter from "../components/Filter/Filter.jsx";

const Catalog = () => {

    return (
        <>
            <Crumbs/>
            <Filter/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Catalog;