import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

// TODO: данные запросом, стили в стилях))
const style = { width: 200, margin: 4 };
const marks = {
    "-10": "-10°C",
    0: <strong>0°C</strong>,
    26: "26°C",
    37: "37°C",
    50: "50°C",
    100: {
        style: {
            color: "red",
        },
        label: <strong>100°C</strong>,
    },
};
function log(value) {
    console.log(value); //eslint-disable-line
}
function RcSlider() {
    return (
        <div>
            <div style={style}>
                <Slider/>
            </div>
        </div>
    );
}
export default RcSlider;