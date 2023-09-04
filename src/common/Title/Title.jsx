import React from 'react';
import Style from './Title.module.scss'

const Title = ({children}) => {
    return (
        <h2 className={Style.title}>
            {children}
        </h2>
    );
};

export default Title;