import React from 'react';
import Style from './Cards.module.scss'
import Index from "./index.jsx";
import { AppContext } from "../../App.jsx";
import {optionsItems} from "../../common/constants.js";



const Cards = () => {
    const {items, fatsSort, sortType, fillersSort, onAddToCart} = React.useContext(AppContext)
    console.log(sortType)
    return (
        <section className={Style.card}>
            <div className="container">
                <div className={Style.cardWrapper}>
                    {
                        items
                            .sort((a, b) => {
                                switch (sortType) {
                                    case 'price':
                                        return a.price - b.price

                                    case '-price':
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
            </div>
        </section>
    );
};

export default Cards;