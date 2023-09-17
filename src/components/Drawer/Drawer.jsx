import React from 'react';
import Style from '../Cart/Cart.module.scss'
import iceOne from '../../../public/img/iceCream/icecream-1.png'
import cross from '../../../public/img/svg/cross.svg'
import Cart from "../Cart/Cart.jsx";
import {AppContext} from "../../App.jsx";




const Drawer = ({cartActive, setCartActive}) => {
    const {items, cartCatalog, onRemoveToCart} = React.useContext(AppContext)



    return (
        <Cart active={cartActive} setActive={setCartActive}>
            <div className={Style.cart}>
                <h1 className={Style.cartTitle}>
                    {Object.values(cartCatalog.itemsCard).length ? "Корзина" :
                        "Ваша корзина пока пуста"
                    }
                </h1>
                {
                    Object.values(cartCatalog.itemsCard)
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
                                            {cart.amount} кг х {cart.price} ₽
                                        </div>
                                    </div>
                                    <div className={Style.cartItemPrice}>
                                        {cart.amount * cart.price} ₽
                                    </div>
                                    <button onClick={() => onRemoveToCart(cart.id)}>
                                        <img src={cross} alt=""/>
                                    </button>
                                </div>
                            </div>
                        ))
                }
                {
                    !!Object.values(cartCatalog.itemsCard).length &&
                    <div className={Style.cartItemElement}>
                        <button className={Style.cartItemElementButton}>Оформить заказ</button>
                        <div className={Style.cartItemElementTotal}>Итого: {cartCatalog.amountPrice} ₽</div>
                    </div>
                }
            </div>
        </Cart>
    );
};

export default Drawer;

