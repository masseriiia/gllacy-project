import React from 'react';
import Style from './Select.module.scss'
import {AppContext} from "../../App.jsx";

const Select = ({title, optionsData}) => {
    const {handleChange, handleChangeType} = React.useContext(AppContext)

    return (
        <label className={Style.filterFormLabel}>
            {title}:
            <select className={Style.filterFormItem} onChange={(event) => handleChangeType(event.target.value)}>
                {
                    optionsData.map((item) => <option key={item.value} value={item.value}>{item.title}</option>)
                }
            </select>
        </label>
    );
};

export default Select;