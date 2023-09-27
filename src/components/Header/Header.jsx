import React, {useState} from 'react';
import logo from '../../../public/img/svg/logo.svg'
import arrowDown from '../../../public/img/svg/arrow-down.svg'
import search from '../../../public/img/svg/search.svg'
import login from '../../../public/img/svg/login.svg'
import cart from '../../../public/img/svg/cart.svg'
import Style from './Header.module.scss'
import Button from "../../common/Buttons/IconButton/IconButton.jsx";
import Drawer from "../Drawer/Drawer.jsx";
import {AppContext} from "../../App.jsx";
import Modal from "../../common/Modal/Modal.jsx";
import Search from "../Search/index.jsx";
import SearchModal from "../Search/SearchModal.jsx";

const num_word = (value, words) => {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if(value > 10 && value < 20) return words[2];
    if(num > 1 && num < 5) return words[1];
    if(num == 1) return words[0];
    return words[2];
}

const Header = () => {
    const [searchActive, setSearchActive] = React.useState(false)
    const [cartActive, setCartActive] = React.useState(false)
    const { cartCatalog } = React.useContext(AppContext)

    const amountItem = Object.values(cartCatalog.itemsCard).length

    return (
        <header className={Style.header}>
            <div className="container">
                <div className={Style.headerWrapper}>
                    <div className={Style.headerLeft}>
                        <a className="headerLogo" href="/">
                            <img src={logo} alt="Логотип"/>
                        </a>
                        <ul className={Style.headerItems}>
                            <li className={Style.headerItem}>
                                <a href="catalog">Каталог</a>
                                <img src={arrowDown} alt="Информация"/>
                            </li>
                            <li className={Style.headerItem}>
                                Доставка и оплата
                            </li>
                            <li className={Style.headerItem}>О компании</li>
                        </ul>
                    </div>
                    <div className={Style.headerRight}>
                        <button className={Style.headerNumber}>
                            <a href="">+7 800 555-86-28</a>
                        </button>
                        <div className="" onClick={() => setSearchActive(!searchActive)}>
                            <Button className="headerSearch">
                                <img src={search} alt=""/>
                            </Button>
                            <SearchModal searchActive={searchActive} setSearchActive={setSearchActive}/>
                        </div>
                        <Button className="headerLogin">
                            <img src={login} alt=""/>
                            Вход
                        </Button>
                        <div className="" onClick={() => setCartActive(!cartActive)}>
                            <Button className="headerCart" >
                                <img src={cart} alt=""/>
                                {
                                    amountItem ? `${amountItem} ${num_word(amountItem, ['товар', 'товара', 'товаров'])}`  : "Корзина пуста"
                                }
                            </Button>
                            <Drawer cartActive={cartActive} setCartActive={setCartActive}/>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;