import React from 'react';
import Style from './Search.module.scss'

const Search = () => {
    return (
        <div>
            <input className={Style.searchInput} type="text" placeholder="Введите название мороженного..."/>
        </div>
    );
};

export default Search;