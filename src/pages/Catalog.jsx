import React from 'react';
import Cards from "../components/Cards/Cards.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Crumbs from "../components/Crumbs/Crumbs.jsx";
import Filter from "../components/Filter/Filter.jsx";
import axios from "axios";

export const СartContext = React.createContext('')

const Catalog = () => {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        axios.get("https://64d8ebd15f9bf5b879ceb2cd.mockapi.io/items")
            .then(res => setItems(res.data))
        axios.get("https://64d8ebd15f9bf5b879ceb2cd.mockapi.io/cart")
            .then(res => setItems(res.data))
    },[])

    const onAddToCart = (obj) => {
        axios.post("https://64d8ebd15f9bf5b879ceb2cd.mockapi.io/cart", obj)
        setItems((prev) => [...prev, obj])
    }

    return (
        <СartContext.Provider value={{items, setItems, onAddToCart}}>
            <Crumbs/>
            <Filter/>
            <Cards/>
            <Footer/>
        </СartContext.Provider>
    );
};

export default Catalog;