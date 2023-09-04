import React from 'react';
import Style from './Button.module.scss'

const Button = ({children}) => {
    return (
        <button className={Style.button}>
            {children}
        </button>
    );
};

export default Button;