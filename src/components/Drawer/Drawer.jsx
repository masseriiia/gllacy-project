import React from 'react';
import Style from '../Cart/Cart.module.scss'
import iceOne from '../../../public/img/iceCream/icecream-1.png'
import cross from '../../../public/img/svg/cross.svg'
import Cart from "../Cart/Cart.jsx";

const Drawer = ({cartActive, setCartActive}) => {
    return (
        <Cart active={cartActive} setActive={setCartActive}>
            <div className={Style.cart}>
                <h1 className={Style.cartTitle}>Корзина</h1>
                <div className={Style.cartItems}>
                    <div className={Style.cartItem}>
                        <div className={Style.cartItemImg}>
                            <img src={iceOne} alt=""/>
                        </div>
                        <div className={Style.cartItemDescr}>
                            <div className={Style.cartItemTitle}>
                                Малинка
                            </div>
                            <div className={Style.cartItemInfo}>
                                1 кг х 310 ₽
                            </div>
                        </div>
                        <div className={Style.cartItemPrice}>
                            310 ₽
                        </div>
                        <button>
                            <img src={cross} alt=""/>
                        </button>
                    </div>
                </div>
                <div className={Style.cartItemElement}>
                    <button className={Style.cartItemElementButton}>Оформить заказ</button>
                    <div className={Style.cartItemElementTotal}>Итого:</div>
                </div>
            </div>
        </Cart>
    );
};

export default Drawer;