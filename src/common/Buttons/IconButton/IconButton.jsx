import React from 'react';
import Style from './IconButton.module.scss'

const IconButton = ({children}) => {
    return (
        <button className={Style.iconButton}>
            {children}
        </button>
    );
};

export default IconButton;