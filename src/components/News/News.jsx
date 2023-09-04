import React from 'react';
import Style from './News.module.scss'
import Button from "../../common/Buttons/Button/Button.jsx";

const News = () => {
    return (
        <section className={Style.news}>
            <div className="container">
                <div className={Style.cardWrapper}>
                    <div className={Style.newsBlog}>
                        <span className={Style.newsBlogSpan}>
                            Новое в нашем блоге
                        </span>
                        <p className={Style.newsBlogName}>
                            10 способов сервировки фруктовых щербетов
                            к столу
                        </p>
                    </div>
                    <div className={Style.newsSubscription}>
                        <div className={Style.newsSubscriptionInner}>
                            <p className={Style.newsSubscriptionDescr}>
                                Подпишитесь на нашу сладкую рассылку и будьте всегда
                                в курсе всего самого вкусного, что у нас происходит. Обещаем не спамить и не слать всякой ненужной ерунды. Честно =)
                            </p>

                            <form className={Style.newsSubscriptionForm}>
                                <input className={Style.newsSubscriptionFormInput} type="text" placeholder="email@example.com"/>
                                <div className={Style.newsSubscriptionFormButton}>
                                    <Button>
                                        Отправить
                                    </Button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;