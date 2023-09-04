import React from 'react';
import malina from '../../../public/img/malina.png'
import marshmallow from '../../../public/img/marshmallow.png'
import Style from './Present.module.scss'
import PresentItem from "./PresentItem.jsx";
import Title from "../../common/Title/Title.jsx";

const Present = () => {
    const presentData = [
        {
            id: 1,
            name: "Малинка даром!",
            descr: "При покупке 2 кг любого фруктового мороженого добавим в ваш заказ банку малинового варенья бесплатно.",
            img: malina
        },
        {
            id: 2,
            name: "Маршмеллоу даром!",
            descr: "При покупке 2 кг пломбира добавим в ваш заказ упаковку нежных зефирок совершенно бесплатно.",
            img: marshmallow
        }
    ]


    return (
        <section className={Style.present}>
            <div className="container">
                <Title >
                    Заказывайте мороженое <br/>
                    и получайте подарки!
                </Title>
                <div className={Style.presentItems}>
                    {
                        presentData.map(present =>
                            <PresentItem
                                key={present.id}
                                name={present.name}
                                descr={present.descr}
                                img={present.img}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Present;