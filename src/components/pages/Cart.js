import React, {useContext} from 'react';
import CartItem from '../CartItem';
import { GlobalContext } from '../../context/GlobalState';

const Cart = () => {
    const { products } = useContext(GlobalContext);
    let cartProduct = products.filter(cart => cart.inCart === true);
    let price = cartProduct.map(product => product.price);
    let subtotal = price.reduce((acc, item) => (acc += item), 0);
    let total = subtotal + 50;
    console.log(price)

    return (
        <section id="cart">
            <h1>Your Cart</h1>
            <div id="card-flex">
                <div id="cart-container">
                    <div id="cart-head">
                        <h2>Product</h2>
                        <h2>Name</h2>
                        <h2>Price</h2>
                        <h2>Amount</h2>
                        <h2>Total</h2>
                        <h2>Remove</h2>
                    </div>
                    <div>
                        {products.filter(cart => cart.inCart === true)
                        .map((item, i) => {
                            return(<CartItem item={item} key={i} />)
                        })}
                    </div>
                </div>

                <div id="card-total">
                    <div>SubTotal: <span>${subtotal}</span></div>
                    <div>Shipping: <span>$50</span></div>
                    <div>Total: <span>${total}</span></div>
                    <div id="checkout">Checkout</div>
                </div>
            </div>

        </section>
    )
}

export default Cart
