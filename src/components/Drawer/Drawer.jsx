import React from 'react';
import Style from '../Cart/Cart.module.scss'
import iceOne from '../../../public/img/iceCream/icecream-1.png'
import cross from '../../../public/img/svg/cross.svg'
import Cart from "../Cart/Cart.jsx";
import {AppContext} from "../../App.jsx";

const Drawer = ({cartActive, setCartActive}) => {
    const {items, cartCatalog} = React.useContext(AppContext)

    return (
        <Cart active={cartActive} setActive={setCartActive}>
            <div className={Style.cart}>
                <h1 className={Style.cartTitle}>Корзина</h1>
                {
                    Object.keys(cartCatalog)
                        .map(id => items.filter(item => item.id === id)[0])
                        .map(cart => (
                            <div className={Style.cartItems}>
                                <div className={Style.cartItem}>
                                    <div className={Style.cartItemImg}>
                                        <img src={cart.img} alt=""/>
                                    </div>
                                    <div className={Style.cartItemDescr}>
                                        <div className={Style.cartItemTitle}>
                                            {cart.name}
                                        </div>
                                        <div className={Style.cartItemInfo}>
                                            1 кг х 310 ₽
                                        </div>
                                    </div>
                                    <div className={Style.cartItemPrice}>
                                        {cart.price}
                                    </div>
                                    <button>
                                        <img src={cross} alt=""/>
                                    </button>
                                </div>
                            </div>
                        ))
                }
                <div className={Style.cartItemElement}>
                    <button className={Style.cartItemElementButton}>Оформить заказ</button>
                    <div className={Style.cartItemElementTotal}>Итого:</div>
                </div>
            </div>
        </Cart>
    );
};

export default Drawer;