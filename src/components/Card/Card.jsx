import React, {useEffect, useState} from 'react';
import Style from './Card.module.scss'
import CardItem from "./CardItem.jsx";
import axios from "axios";

const Card = () => {
        const [items, setItems] = useState([])
        const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(response => setItems(response.data))
        axios.get('http://localhost:3000/cart')
            .then(response => setCartItems(response.data))
    },[])

    const onAddToCart = (obj) => {
        axios.post('http://localhost:3000/cart', obj)
        setCartItems((prev) => [...prev], obj)
    }

    return (
        <section className={Style.card}>
            <div className="container">
                <div className={Style.cardWrapper}>
                    {
                        items.map(cart =>
                            <CardItem
                                key={cart.id}
                                img={cart.img}
                                name={cart.name}
                                descr={cart.descr}
                                price={cart.price}
                                onClick={() => console.log(obj)}
                                onPlus={obj => onAddToCart(obj)}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Card;