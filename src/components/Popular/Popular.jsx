import React from 'react';
import iceCreamOne from '../../../public/img/iceCream/icecream-1.png'
import iceCreamTwo from '../../../public/img/iceCream/icecream-2.png'
import iceCreamThree from '../../../public/img/iceCream/icecream-3.png'
import iceCreamFour from '../../../public/img/iceCream/icecream-4.png'
import Style from './Popular.module.scss'
import PopularItem from "./PopularItem.jsx";
import Title from "../../common/Title/Title.jsx";

const Popular = () => {
    const popularData = [
        {
            id: 1,
            img: iceCreamOne,
            name: "Малинка",
            descr: "Сливочное мороженое с малиновым джемом",
            price: 310,
        },
        {
            id: 2,
            img: iceCreamTwo,
            name: "Фисташка",
            descr: "Фисташковый пломбир с кусочками шоколада",
            price: 340,
        },
        {
            id: 3,
            img: iceCreamThree,
            name: "Черника",
            descr: "Крем-брюле с черничным джемом",
            price: 330,
        },
        {
            id: 4,
            img: iceCreamFour,
            name: "Бабл-гам",
            descr: "Ванильный пломбир со сладкой посыпкой",
            price: 320,
        },
    ]

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
                        popularData.map(popular =>
                            <PopularItem
                                key={popular.id}
                                img={popular.img}
                                name={popular.name}
                                descr={popular.descr}
                                price={popular.price}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Popular;