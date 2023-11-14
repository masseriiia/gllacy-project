import React from 'react';
import Style from './Select.module.scss'
import {AppContext} from "../../App.jsx";

const Select = ({title, optionsItems, onChange}) => {

    return (
        <label className={Style.filterFormLabel}>
            {title}:
            <select className={Style.filterFormItem} onChange={(event) => onChange(event.target.value)}>
                {
                    optionsItems
                        .map((item) => <option key={item.value} value={item.value}>{item.title}</option>)
                }
            </select>
        </label>
    );
};

export default Select;