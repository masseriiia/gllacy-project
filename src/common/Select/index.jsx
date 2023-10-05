import React from 'react';
import Style from './Select.module.scss'

const Select = ({title, options}) => {
    console.log(options)
    return (
        <label className={Style.filterFormLabel}>
            {title}:
            <select className={Style.filterFormItem}>
                {
                    options.map((item) => <option key={item.value} value={item.value}>{item.title}</option>)
                }
            </select>
        </label>
    );
};

export default Select;