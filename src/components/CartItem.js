import React from 'react';
import Amount from './Amount';
import RemoveCart from './RemoveCart';


const CartItem = ({ item }) => {


    let amount = parseInt(item.amount);
    let price = parseInt(item.price);
    let total = amount * price;

    return (
        <div className="cart-product">
            <img src={item.image} alt=""/>
            <h3>{item.name}</h3>
            <h3>${item.price}</h3>
            <Amount item={item} />
            <h3>${total}</h3>
            <RemoveCart item={item} />
        </div>
       
    )
}

export default CartItem
