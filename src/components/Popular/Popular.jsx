import React from 'react';
import Style from './Popular.module.scss'
import PopularItem from "./PopularItem.jsx";
import Title from "../../common/Title/Title.jsx";
import {AppContext} from "../../App.jsx";

const Popular = () => {
    const {items, onAddToCart} = React.useContext(AppContext)

    return (
        <section className={Style.popular}>
            <div className="container">
                <div className={Style.popularTitle}>
                    <Title>
                        Попробуйте самые популярные <br/> вкусы нашего мороженого
                    </Title>
                </div>

                <div className={Style.popularItems}>
                    {
                        items.filter(item => item.rating === 10).map(popular =>
                            <PopularItem
                                key={popular.id}
                                {...popular}
                                onAddToCart={onAddToCart}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Popular;

