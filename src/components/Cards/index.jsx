import React from 'react';
import cart from '../../../public/img/svg/cart-2.svg'
import Style from './Cards.module.scss'

const Index = ({img, name, descr, price}) => {

    return (
        <div className={Style.cardItem}>
            <div className={Style.cardItemImg}>
                <img src={img} alt=""/>
            </div>
            <div className={Style.cardItemTitle}>
                {name}
            </div>
            <div className={Style.cardItemDescr}>
                {descr}
            </div>
            <div className={Style.cardItemInfo}>
                <div className={Style.cardItemPrice}>
                    {price} ₽/кг
                </div>
                <button className={Style.cardItemBuy}>
                    <img src={cart} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default Index;