import React from 'react';
import Style from "../../Select/Select.module.scss";

const InputRange = ({title, minValue, maxValue, stepValue, onChange}) => {
    return (
        <label>
            {title}
            <input className={Style.filterFormItem} type="range" min={minValue} max={maxValue} step={stepValue} onChange={(event) => onChange(event.target.value)}/>
        </label>
    );
};

export default InputRange;