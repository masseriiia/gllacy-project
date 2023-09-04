import React from 'react';
import telegram from '../../../public/img/svg/telegram.svg'
import vk from '../../../public/img/svg/vk.svg'
import youtube from '../../../public/img/svg/youtube.svg'
import logoHtml from '../../../public/img/svg/logohtmlacademy.svg'
import Style from './Footer.module.scss'

const Footer = () => {
    return (
        <section className={Style.footer}>
            <div className="container">
                <div className={Style.footerWrapper}>
                    <div className={Style.footerSocials}>
                        <a href="#">
                            <img src={telegram} alt="telegram"/>
                        </a>
                        <a href="#">
                            <img src={vk} alt="vk"/>
                        </a>
                        <a href="#">
                            <img src={youtube} alt="youtube"/>
                        </a>
                    </div>
                    <div className={Style.footerDescr}>
                        <a className={Style.footerDescrlink} href="#">
                            Для поставщиков
                        </a>
                        <a className={Style.footerDescrlink} href="#">
                            Наши документы
                        </a>
                        <a className={Style.footerDescrlink} href="#">
                            О производстве
                        </a>
                        <a className={Style.footerDescrlink} href="#">
                            Экологические стандарты
                        </a>
                    </div>
                    <div className={Style.footerInfo}>
                        <img className={Style.footerInfoImg} src={logoHtml} alt=""/>
                        <p className={Style.footerInfoText}>
                            Сделал сам без .html academy © 2023
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;