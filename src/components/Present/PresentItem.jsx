import React from 'react';
import Style from './Present.module.scss'
import Button from "../../common/Buttons/Button/Button.jsx";


const PresentItem = ({name, descr, img}) => {
    return (
        <div className={Style.presentCard}>
            <div className={Style.presentCardItem}>
                <h2 className={Style.presentCardItemTitle}>
                    {name}
                </h2>
                <p className={Style.presentCardItemDescr}>
                    {descr}
                </p>
                <Button>
                    Хочу подарок
                </Button>
            </div>
            <div className={Style.presentCardImg}>
                <img src={img} alt="Подарок"/>
            </div>
        </div>
    );
};

export default PresentItem;