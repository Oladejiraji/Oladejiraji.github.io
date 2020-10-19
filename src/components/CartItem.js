import React, {useContext} from 'react';
import Amount from './Amount';
import { GlobalContext } from '../context/GlobalState';

const CartItem = ({ item }) => {
    const { deleteCart } = useContext(GlobalContext);

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
            <div className="remove"><span onClick={(e) => deleteCart(item.id)} >X</span></div>
        </div>
       
    )
}

export default CartItem
