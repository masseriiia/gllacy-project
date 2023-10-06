import React from 'react';
import Style from './Filter.module.scss'
import RcSlider from "./RcSlider/RcSlider.jsx";
import Button from "../../common/Buttons/Button/Button.jsx";
import Select from "../../common/Select/index.jsx";
import InputRadio from "../../common/Input/radio";
import InputCheckbox from "../../common/Input/checkbox";
import InputRange from "../../common/Input/range";
import InputDoubleRange from "../../common/Input/range/inputDoubleRange.jsx";

const Filter = () => {
    const optionsData = [
        {
            value: 'title',
            title: 'по названию'
        },
        {
            value: 'popular',
            title: 'по популярности'
        },
        {
            value: 'price',
            title: 'сначала дешёвые'
        },
        {
            value: '-price',
            title: 'сначала дорогие'
        },
    ]

    const fatsData = [
        {
            title: '0%',
            value: 0,
        },
        {
            title: '10%',
            value: 10
        },
        {
            title: '30%',
            value: 30
        },
        {
            title: '40%',
            value: 40
        },
    ]

    const fillersData = [
        {
            title: 'шоколадные',
            value: "шоколадные"
        },
        {
            title: 'сахарные',
            value: "сахарные"
        },
        {
            title: 'фрукты',
            value: "фрукты"
        },
        {
            title: 'сиропы',
            value: "сиропы"
        },
        {
            title: 'джемы',
            value: "джемы"
        },
    ]


    return (
        <section className={Style.filter}>
            <div className="container">
                <div className={Style.filterWrapper}>
                    <div className={Style.filterForm}>
                        <Select title="Сортировка" optionsData={optionsData}/>
                        <InputDoubleRange title="Цена" minValue={280} maxValue={360} stepValue={10} />
                        <label className={Style.filterFormLabel}> Жирность:
                            <div className={Style.filterFormItem}>
                                {
                                    fatsData.map((item) => (
                                        <InputRadio fats={item} />
                                    ))
                                }
                            </div>
                        </label>
                        <label className={Style.filterFormLabel}> Наполнители:
                            <span className={Style.filterFormItem}>
                                {
                                    fillersData.map((item) => (
                                        <InputCheckbox fillers={item} />
                                    ))
                                }
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