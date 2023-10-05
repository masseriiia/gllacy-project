import React, {useState} from 'react';
import Style from "../../Input/range/InputRange.module.scss";
import {AppContext} from "../../../App.jsx";

const InputDoubleRange = ({title, minValue, maxValue, stepValue}) => {
    const {handleChange} = React.useContext(AppContext)
    const [minValueState, setMinValueState] = useState(minValue)
    const [maxValueState, setMaxValueState] = useState(maxValue)


    const handleMinValue = (value) => {
        setMinValueState(value)
    }

    const handleMaxValue = (value) => {
        setMaxValueState(value)
    }

    return (
        <label className={Style.filterFormLabel} >
            {title}:
            <div className={Style.filterRadioItem}>
                <input className={Style.filterRadioInput} type="range" min={minValue} max={maxValueState} step={stepValue} onChange={(event) => handleMinValue(event.target.value)}/>
                <input className={Style.filterRadioInput} type="range" min={minValueState} max={maxValue} step={stepValue} onChange={(event) => handleMaxValue(event.target.value)}/>
            </div>
        </label>
    );
};

export default InputDoubleRange;