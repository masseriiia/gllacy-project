import React from 'react';
import InputRadio from "../radio/index.jsx";
import Style from "../../../components/Filter/Filter.module.scss";
import {AppContext} from "../../../App.jsx";

const InputCheckbox = ({title, value, onChange}) => {

    return (
        <label className={Style.filterFormElement}>
            <input className={Style.filterFormInput} value={value} type="checkbox" onChange={(event) => onChange(event.target.value)}/>
            <span className={Style.filterCheckmark}></span>
            {title}
        </label>
    );
};

export default InputCheckbox;