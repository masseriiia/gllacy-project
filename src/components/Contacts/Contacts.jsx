import React, {useState} from 'react';
import Style from './Contacts.module.scss'
import StyleModule from '../../common/Modal/Modal.module.scss'
import Button from "../../common/Buttons/Button/Button.jsx";
import Modal from "../../common/Modal/Modal.jsx";
import Cross from "../../../public/img/svg/cross.svg"

const Contacts = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <section className={Style.contacts}>
            <div className="container">
                <div className={Style.contactsWrapper}>
                    <div className={Style.contactsItem}>
                       <p className={Style.contactsItemDescr}>
                           Адрес главного офиса и офлайн-магазина:
                       </p>
                        <p className={Style.contactsItemAdress}>
                            наб. реки Карповки,  5 лит П, Санкт-Петербург
                        </p>
                        <p className={Style.contactsItemDescr}>
                                Для заказов по телефону:
                        </p>
                        <p className={Style.contactsItemNumber}>
                            +7 (812) 812-12-12
                        </p>
                        <p className={Style.contactsItemSchedule}>
                                (с 10 до 20 ежедневно)
                            </p>
                        <div className={Style.contactsItemButton} onClick={() => setModalActive(!modalActive)}>
                            <Button >
                                Форма обратной связи
                            </Button>
                        </div>
                    </div>
                    <Modal  active={modalActive} setActive={setModalActive}>
                        <form className={StyleModule.formModule}>
                            <button className={StyleModule.formModuleButtonClose} onClick={e => e.stopPropagation()}>
                                <img onClick={() => setModalActive(!modalActive)} src={Cross} alt=""/>
                            </button>
                            <h2 className={StyleModule.formModuleTile}>
                                Мы обязательно ответим вам!
                            </h2>
                            <input
                                className={StyleModule.formModuleInput}
                                type="text"
                                placeholder="Имя и фамилия"
                            />
                            <input
                                className={StyleModule.formModuleInput}
                                type="email"
                                placeholder="email@example.com"
                            />
                            <textarea
                                className={StyleModule.formModuleArea}
                                placeholder="В свободной форме"
                            ></textarea>
                            <div className={StyleModule.formModuleButton}>
                                <Button>
                                    Отправить
                                </Button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default Contacts;