import React from 'react';
import InputRadio from "../radio/index.jsx";
import Style from "../../../components/Filter/Filter.module.scss";
import {AppContext} from "../../../App.jsx";

const InputCheckbox = ({fillers}) => {
    const {handleChange} = React.useContext(AppContext)
    return (
        <label className={Style.filterFormElement}>
            <input className={Style.filterFormInput} value={fillers.value} type="checkbox" onChange={(event) => handleChange(event.target.value)}/>
            <span className={Style.filterCheckmark}></span>
            {fillers.title}
        </label>
    );
};

export default InputCheckbox;