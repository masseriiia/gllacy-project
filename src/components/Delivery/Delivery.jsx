import React from 'react';
import info from '../../../public/img/svg/info.svg'
import Style from './Delivery.module.scss'
import Button from "../../common/Buttons/Button/Button.jsx";

const Delivery = () => {
    return (
        <section className={Style.delivery}>
            <div className="container">
                <div className={Style.deliveryWrapper}>
                    <div className={Style.deliveryLeft}>
                        <h2 className={Style.deliveryLeftTitle}>
                            Доставка любимого <br/> мороженого на дом
                        </h2>
                        <p className={Style.deliveryLeftDescr}>
                            Хочется полакомиться любимым десертом,  но нет времени съездить в магазин? Закажите доставку мороженого на дом, и курьер привезёт вам ваш заказ в течение часа!
                        </p>
                    </div>
                    <div className={Style.deliveryRight}>
                        <p className={Style.deliveryRightDescr}>
                            Укажите адрес и дату доставки, и мы свяжемся с вами, чтобы подтвердить заказ.
                        </p>
                        <form className={Style.deliveryRightForm}>
                            <div style={{display: 'flex', flexDirection: "column", gap: "20px"}}>
                                <div className={Style.deliveryRightFormData}>
                                    <label className={Style.deliveryRightFormLabel}>
                                        <div className={Style.deliveryRightFormElement}>
                                            Дата
                                            <img className={Style.deliveryRightFormImg} src={info} alt="info"/>
                                        </div>
                                        <input className={Style.deliveryRightFormInput} type="date" placeholder="01.04.2020"/>
                                    </label>
                                    <label className={Style.deliveryRightFormLabel}>
                                        <div className={Style.deliveryRightFormElement}>Телефон</div>
                                        <input className={Style.deliveryRightFormInput} type="tel" placeholder="+7 800 999-00-00"/>
                                    </label>
                                </div>
                                <div className={Style.deliveryRightFormData}>
                                    <label className={Style.deliveryRightFormLabel}>
                                        <div className={Style.deliveryRightFormElement}>
                                            Адрес
                                            <img className={Style.deliveryRightFormImg} src={info} alt="info"/>
                                        </div>
                                        <input className={Style.deliveryRightFormInput} type="text" placeholder="ул. Большая Конюшенная, 19/8"/>
                                    </label>
                                </div>
                            </div>
                            <div className={Style.deliveryRightFormButton}>
                                <Button>
                                    Отправить
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;