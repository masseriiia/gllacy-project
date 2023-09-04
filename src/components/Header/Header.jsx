import React, {useState} from 'react';
import logo from '../../../public/img/svg/logo.svg'
import arrowDown from '../../../public/img/svg/arrow-down.svg'
import search from '../../../public/img/svg/search.svg'
import login from '../../../public/img/svg/login.svg'
import cart from '../../../public/img/svg/cart.svg'
import Style from './Header.module.scss'
import Button from "../../common/Buttons/IconButton/IconButton.jsx";
import Drawer from "../Drawer/Drawer.jsx";

const Header = () => {
    const [cartActive, setCartActive] = useState(false)

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
                        <Button className="headerSearch">
                            <img src={search} alt=""/>
                        </Button>
                        <Button className="headerLogin">
                            <img src={login} alt=""/>
                            Вход
                        </Button>
                        <div className="" onClick={() => setCartActive(!cartActive)}>
                            <Button className="headerCart" >
                                <img src={cart} alt=""/>
                                товар
                            </Button>
                        </div>

                        <Drawer cartActive={cartActive} setCartActive={setCartActive}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;