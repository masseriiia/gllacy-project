import React, {useState} from 'react';
import Style from "../../../components/Filter/Filter.module.scss";
import {AppContext} from "../../../App.jsx";

const InputRadio = ({title, value, onChange}) => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <label className={`${Style.filterFormElement} ${Style.radioButton}`}>
            <input
                type="radio"
                checked={isActive}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            <span
                className={Style.radioCustom}
                onClick={handleClick}
                style={{
                    backgroundColor: isActive ? '#ffffff' : 'transparent',
                }}
            ></span>
            {title}
        </label>
    );
};

export default InputRadio;