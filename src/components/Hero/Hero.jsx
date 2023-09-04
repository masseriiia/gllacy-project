import React from 'react';
import Style from './Hero.module.scss'
import iceCream from '../../../public/img/icecream.png'
import arrowLeft from '../../../public/img/svg/arrow-left.svg'
import arrowRight from '../../../public/img/svg/arrow-right.svg'
import iceCreamMiniOne from '../../../public/img/icecream-mini-1.png'
import iceCreamMiniTwo from '../../../public/img/icecream-mini-2.png'
import telegram from '../../../public/img/svg/telegram.svg'
import vk from '../../../public/img/svg/vk.svg'
import youtube from '../../../public/img/svg/youtube.svg'
import Button from "../../common/Buttons/Button/Button.jsx";

const Hero = () => {
    return (
        <section className={Style.hero}>
            <div className="container">
                <div className="heroWrapper">
                    <div className={Style.wrapper}>
                        <div className={Style.heroDescr}>
                            <h1 className={Style.heroTitle}>
                                Нежный пломбир <br/>
                                с клубничным джемом
                            </h1>
                            <p className={Style.heroText}>
                                Натуральное мороженое из свежих сливок
                                и молока с вкуснейшим клубничным джемом – это идеальный десерт для всей семьи.
                            </p>
                            <Button>
                                Заказать
                            </Button>
                        </div>
                        <div className={Style.heroSlider}>
                            <div className={Style.iceCreamOne}>
                                <button className={Style.heroArrowLeft}>
                                    <img src={arrowLeft} alt=""/>
                                </button>
                                <div className={Style.heroCream}>
                                    <img src={iceCream} alt=""/>
                                </div>
                                <button className={Style.heroArrowRight}>
                                    <img src={arrowRight} alt=""/>
                                </button>
                            </div>
                            <div className={Style.iceCreamTwo}>
                                <img src={iceCreamMiniOne} alt=""/>
                            </div>
                            <div className={Style.iceCreamThree}>
                                <img src={iceCreamMiniTwo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={Style.heroWrapperBottom}>
                        <div className={Style.points}>
                            <div className={Style.point}></div>
                            <div className={Style.point}></div>
                            <div className={Style.point}></div>
                        </div>
                        <div className={Style.socials}>
                            <a href="#">
                                <img src={telegram} alt=""/>
                            </a>
                            <a href="#">
                                <img src={vk} alt=""/>
                            </a>
                            <a href="#">
                                <img src={youtube} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;