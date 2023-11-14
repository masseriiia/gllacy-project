import React from 'react';
import chevronsRight from '../../../public/img/svg/chevrons-right.svg'
import Style from './Crumbs.module.scss'
import Title from "../../common/Title/Title.jsx";

const Crumbs = () => {
    return (
        <section className={Style.crumbs}>
            <div className="container">
                <div className={Style.crumbsWrapper}>
                    <ul className={Style.crumbsItems}>
                        <li className={Style.crumbsItem}>
                            Главная
                            <img src={chevronsRight} alt=""/>
                        </li>
                        <li className={Style.crumbsItem}>
                            Каталог
                        </li>
                    </ul>
                    <h2 className={Style.crumbsTitle}>
                        Сливочное мороженое
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Crumbs;