import React from 'react';
import Style from './Filter.module.scss'
import RcSlider from "./RcSlider/RcSlider.jsx";
import Button from "../../common/Buttons/Button/Button.jsx";

const Filter = () => {
    return (
        <section className={Style.filter}>
            <div className="container">
                <div className={Style.filterWrapper}>
                    <div className={Style.filterForm}>
                        <label className={Style.filterFormLabel}>
                            Сортировка:
                            <select className={Style.filterFormItem}>
                                <option value="">по названию</option>
                                <option value="">по популярности</option>
                            </select>
                        </label>
                        <label className={Style.filterFormLabel}>
                            Цена:
                            <div className={Style.filterFormItem}>
                                <RcSlider/>
                            </div>
                        </label>
                        <label className={Style.filterFormLabel}> Жирность:
                            <div className={Style.filterFormItem}>
                                <label className={Style.filterFormElement}>
                                    <input type="radio"/>
                                    0%
                                </label>
                                <label className={Style.filterFormElement}>
                                    <input type="radio"/>
                                    до 10%
                                </label>
                                <label className={Style.filterFormElement}>
                                    <input type="radio"/>
                                    до 30%
                                </label>
                                <label className={Style.filterFormElement}>
                                    <input type="radio"/>
                                    до 30%
                                </label>
                            </div>
                        </label>
                        <label className={Style.filterFormLabel}> Наполнители:
                            <span className={Style.filterFormItem}>
                                <label className={Style.filterFormElement}>
                                    <input className={Style.filterFormInput} type="checkbox"/>
                                    <span className={Style.filterCheckmark}></span>
                                    шоколадные
                                </label>
                                <label className={Style.filterFormElement}>
                                    <input className={Style.filterFormInput}  type="checkbox"/>
                                    сахарные посыпки
                                </label>
                                <label className={Style.filterFormElement}>
                                    <input className={Style.filterFormInput}  type="checkbox"/>
                                    фрукты
                                </label>
                                <label className={Style.filterFormElement}>
                                    <input className={Style.filterFormInput}  type="checkbox"/>
                                    сиропы
                                </label>
                                <label className={Style.filterFormElement}>
                                    <input className={Style.filterFormInput}  type="checkbox"/>
                                    джемы
                                </label>
                            </span>
                        </label>
                        <button className={Style.filterFormButton}>Применить</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Filter;