import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ item }) => {
    return (
        <div className='cards'>
            <div className="imgBox">
                <img src={item.image} alt="product"/>
            </div>
            <div className="contentBox">
                <h3>{item.name}</h3>
                <h2>${item.price}</h2>
                <Link to={`/product/${item.id}`}>Buy Now</Link>
            </div>
        </div>
    )
}

export default Cards
