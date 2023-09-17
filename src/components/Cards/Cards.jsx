import React from 'react';
import Style from './Cards.module.scss'
import Index from "./index.jsx";
import { AppContext } from "../../App.jsx";


const Cards = () => {
    const {items, setItems, onAddToCart} = React.useContext(AppContext)

    return (
        <section className={Style.card}>
            <div className="container">
                <div className={Style.cardWrapper}>
                    {
                        items.map(cart =>
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