import React from 'react';
import cart from '../../../public/img/svg/cart-2.svg'
import Style from './Popular.module.scss'

const PopularItem = ({img, name, descr, price}) => {
    return (
        <div className={Style.popularItem}>
            <div className={Style.popularItemImg}>
                <img src={img} alt="Мороженное"/>
            </div>
            <div className={Style.popularItemTitle}>
                {name}
            </div>
            <div className={Style.popularItemDescr}>
                {descr}
            </div>
            <div className={Style.popularItemInfo}>
                <p className={Style.popularItemPrice}>
                    {price} ₽/кг
                </p>
                <div className={Style.popularItemBuy}>
                    <img src={cart} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default PopularItem;