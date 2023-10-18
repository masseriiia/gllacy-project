import React from 'react';
import Style from './Cards.module.scss'
import Index from "./index.jsx";
import { AppContext } from "../../App.jsx";



const Cards = () => {
    const {items, fatsSort, sortType, fillersSort, onAddToCart} = React.useContext(AppContext)

    return (
        <section className={Style.card}>
            <div className="container">
                <div className={Style.cardWrapper}>
                    {
                        items
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