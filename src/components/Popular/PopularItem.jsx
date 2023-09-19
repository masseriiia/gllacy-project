import React from 'react';
import cart from '../../../public/img/svg/cart-2.svg'
import Style from './Popular.module.scss'

const PopularItem = ({id, img, name, descr, price, onAddToCart}) => {
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
                <button onClick={() => onAddToCart(id)} className={Style.popularItemBuy}>
                    <img src={cart} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default PopularItem;