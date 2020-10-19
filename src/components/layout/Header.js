import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

const Header = () => {
    const { products } = useContext(GlobalContext);
    const item = products.filter(cart => cart.inCart === true);
    console.log(item.length);

    return (
        <header>
            <div id="title"><Link to="/" >Snicks</Link></div>
            <nav>
                <ul>
                    <li><Link to="/" >Shop</Link></li>
                    <li id="cart-li"><Link to="/cart" >Cart</Link><div id="cart-no">{item.length}</div></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
