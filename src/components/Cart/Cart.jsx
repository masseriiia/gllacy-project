import React from 'react';
import Style from './Cart.module.scss'
import classNames from "classnames";

const Cart = ({active, setActive, children}) => {
    return (
        <div className={classNames(Style.cartModal, {[Style.active]: active})} onClick={() => setActive(false)}>
            <div className={classNames(Style.cartModalContent , {[Style.active]: active})} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>

    );
};

export default Cart;