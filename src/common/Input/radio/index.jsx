import React, {useState} from 'react';
import Style from "../../../components/Filter/Filter.module.scss";
import {AppContext} from "../../../App.jsx";

const InputRadio = ({fats}) => {
    const {items, onAddToCart, handleFatsSort} = React.useContext(AppContext)
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <label className={`${Style.filterFormElement} ${Style.radioButton}`}>
            <input
                type="radio"
                checked={isActive}
                value={fats.value}
                onChange={(event) => handleFatsSort(event.target.value)}
            />
            <span
                className={Style.radioCustom}
                onClick={handleClick}
                style={{
                    backgroundColor: isActive ? '#ffffff' : 'transparent',
                }}
            ></span>
            {fats.title}
        </label>
    );
};

export default InputRadio;