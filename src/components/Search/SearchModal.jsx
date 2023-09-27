import React from 'react';
import Style from './Search.module.scss'
import classNames from "classnames";

const SearchModal = ({searchActive, setSearchActive}) => {
    return (
        <div className={classNames(Style.searchModal, {[Style.active]: active})} >
            <div className={Style.searchModalContent}></div>
        </div>
    );
};

export default SearchModal;