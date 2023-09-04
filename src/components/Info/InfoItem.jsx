import React from 'react';
import Style from './Info.module.scss'

const InfoItem = ({img, descr}) => {
    return (
        <div className={Style.infoItem}>
            <div className={Style.infoItemImg}>
                <img src={img} alt="logo"/>
            </div>
            <div className={Style.infoItemDescr}>
                {descr}
            </div>
        </div>
    );
};

export default InfoItem;