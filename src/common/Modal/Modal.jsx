import React from 'react';
import Style from './Modal.module.scss'
import classNames from "classnames";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={classNames(Style.modal, {[Style.active]: active})} onClick={() => setActive(!active)}>
            <div className={classNames(Style.modalContent, {[Style.active]: active})
            } onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal