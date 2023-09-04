import React from 'react';
import infoOne from '../../../public/img/svg/info-1.svg'
import infoTwo from '../../../public/img/svg/info-2.svg'
import infoThree from '../../../public/img/svg/info-3.svg'
import infoFour from '../../../public/img/svg/info-4.svg'
import Style from './Info.module.scss'
import InfoItem from "./InfoItem.jsx";
import Title from "../../common/Title/Title.jsx";

const Info = () => {
    const infoData = [
        {
          id: 1,
          img: infoOne,
          descr: "Всё наше мороженое изготавливается на собственном производстве с использованием современного оборудования и проверенных временем технологий.",
        },
        {
            id: 2,
            img: infoTwo,
            descr: "Закупка ингредиентов производится только у проверенных фермерских хозяйств, с которыми нас связывает долговременное сотрудничество.",
        },
        {
            id: 3,
            img: infoThree,
            descr: "Для приготовления мороженого используются сливки и молоко высочайшего качества. Все ингредиенты и добавки произведены из натурального сырья.",
        },
        {
            id: 4,
            img: infoFour,
            descr: "Доставка нашего мороженого осуществляется в специальном термопаке, который не даёт мороженому растаять и позволяет сохранить превосходный вкус.",
        },
    ]

    return (
        <section className={Style.info}>
            <div className="container">
                <div className={Style.infoWrapper}>
                    <div className={Style.wrapper}>
                        <Title>
                            Магазин Глейси – это онлайн и офлайн-магазин по продаже <br/> мороженого собственного производства на развес
                        </Title>
                        <div className={Style.infoItems}>
                            {
                                infoData.map(info =>
                                    <InfoItem
                                        key={info.id}
                                        img={info.img}
                                        descr={info.descr}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;