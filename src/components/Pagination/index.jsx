import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Style from './Pagiantion.module.scss'
import {AppContext} from "../../App.jsx";

const Pagination = () => {
    const {items} = useContext(AppContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

    useEffect(() => {

    })

    return (
        <div>

        </div>
    );
};

export default Pagination;