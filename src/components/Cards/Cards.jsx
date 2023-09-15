import React from 'react';
import Style from './Cards.module.scss'
import Index from "./index.jsx";
import { СartContext } from "../../pages/Catalog.jsx";


const Cards = () => {
    const {items, setItems} = React.useContext(СartContext)

    return (
        <section className={Style.card}>
            <div className="container">
                <div className={Style.cardWrapper}>
                    {
                        items.map(cart =>
                            <Index
                                key={cart.id}
                                {...cart}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Cards;