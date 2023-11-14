import React, {useState} from 'react';
import Style from "../../Input/range/InputRange.module.scss";
import {AppContext} from "../../../App.jsx";

const InputDoubleRange = ({title, minValue, maxValue, stepValue}) => {
    const {items, handleChange} = React.useContext(AppContext)
    const [minValueState, setMinValueState] = useState(minValue)
    const [maxValueState, setMaxValueState] = useState(maxValue)
    const [valueState, setValueState] = useState([
        {min: minValueState, max: maxValueState}
    ])
    React.useEffect(() => {
        const filteredItems = filterItemsByPrice(items, minValueState, maxValueState);
        handleChange(filteredItems);
    }, [minValueState, maxValueState]);

    const handleMinValue = (value) => {
        setMinValueState(value)
    }

    const handleMaxValue = (value) => {
        setMaxValueState(value)
    }

    const filterItemsByPrice = (items, minPrice, maxPrice) => {
        return items.filter(item => item.price >= minPrice && item.price <= maxPrice);
    };


    return (
        <label className={Style.filterFormLabel} >
            <div className={Style.filterDescr}>
                {title}:
                <div className={Style.filterValues}>
                    <span id="range1">
                        {minValueState}
                    </span>
                    <span> </span>
                    <span id="range2">
                        {maxValueState}
                    </span>
                </div>
            </div>
            <div className={Style.filterRadioItem}>

                <div className={Style.filterSliderTrack}></div>
                <input type="range" min={minValue} max={maxValueState} step={stepValue} onChange={(event) => handleMinValue(event.target.value)}/>
                <input type="range" min={minValueState} max={maxValue} step={stepValue} onChange={(event) => handleMaxValue(event.target.value)}/>
            </div>
        </label>
    );
};

export default InputDoubleRange;