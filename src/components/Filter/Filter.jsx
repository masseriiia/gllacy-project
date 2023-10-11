import React from 'react';
import Style from './Filter.module.scss'
import RcSlider from "./RcSlider/RcSlider.jsx";
import Button from "../../common/Buttons/Button/Button.jsx";
import Select from "../../common/Select/index.jsx";
import InputRadio from "../../common/Input/radio";
import InputCheckbox from "../../common/Input/checkbox";
import InputRange from "../../common/Input/range";
import InputDoubleRange from "../../common/Input/range/inputDoubleRange.jsx";
import {AppContext} from "../../App.jsx";
import {optionsItems} from "../../common/constants.js";

const Filter = () => {
    const {items, handleFatsSort, handleFillersSort, handleChangeType} = React.useContext(AppContext)

    return (
        <section className={Style.filter}>
            <div className="container">
                <div className={Style.filterWrapper}>
                    <form className={Style.filterForm}>
                        <Select title="Сортировка" optionsItems={optionsItems} onChange={handleChangeType}/>
                        <InputDoubleRange title="Цена" minValue={280} maxValue={360} stepValue={10} />
                        <label className={Style.filterFormLabel}> Жирность:
                            <div className={Style.filterFormItem}>
                                {
                                    items
                                        .reduce((acc, item) => {
                                        if (!acc.includes(item.fats)) {
                                            acc.push(item.fats)
                                        } return acc
                                    },[])
                                        .sort()
                                        .map((item) => (
                                        <InputRadio title={item + '%'} value={item} onChange={handleFatsSort}/>
                                    ))
                                }
                            </div>
                        </label>
                        <label className={Style.filterFormLabel}> Наполнители:
                            <span className={Style.filterFormItem}>
                                {
                                    items.reduce((acc, item) => {
                                        if (!acc.includes(item.fillers)) {
                                            acc.push(item.fillers)
                                        } return acc
                                    },[]).map((item) => (
                                        <InputCheckbox title={item} value={item} onChange={handleFillersSort}/>
                                    ))
                                }
                            </span>
                        </label>
                        <button className={Style.filterFormButton}>Применить</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Filter;