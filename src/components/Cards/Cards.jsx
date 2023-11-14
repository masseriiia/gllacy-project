import React from 'react';
import Style from './Cards.module.scss'
import Index from "./index.jsx";
import { AppContext } from "../../App.jsx";
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Pagination from "../Pagination/index.jsx";


const Cards = () => {
    const {items, fatsSort, sortType, fillersSort, onAddToCart, cartCatalog, filteredItems  } = React.useContext(AppContext)
    console.log(sortType)

    return (
        <section className={Style.card}>
            <div className="container">
                <div className={Style.cardWrapper}>
                    {
                        filteredItems
                            .sort((a, b) => {
                                switch (sortType) {
                                    case 'title':
                                        return a.name.localeCompare(b.name)
                                    case '-price':
                                        return a.price - b.price

                                    case 'price':
                                        return b.price - a.price

                                    case 'popular':
                                        return b.rating - a.rating;

                                    default:
                                        return 0;
                                }
                            })
                            .reduce((acc, item) => {
                                if (item.fats == fatsSort || fatsSort == undefined) {
                                    acc.push(item)
                                }
                                return acc
                            }, [])
                            .reduce((acc, item) => {
                                if (fillersSort.includes(item.fillers)|| !fillersSort.length) {
                                    acc.push(item)
                                }
                                return acc
                            }, [])
                            .map(cart =>
                            <Index
                                key={cart.id}
                                {...cart}
                                onAddToCart={onAddToCart}
                            />
                        )
                    }
                </div>
                <Pagination/>
            </div>
        </section>
    );
};

export default Cards;