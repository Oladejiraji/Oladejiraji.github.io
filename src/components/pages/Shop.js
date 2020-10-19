import React, { useContext } from 'react'
import Cards from '../Cards';
import { GlobalContext } from '../../context/GlobalState';

const Products = () => {
    const { products } = useContext(GlobalContext);

    return (
        <section id='shop'>
            <h1>Our Products</h1>
            <div id="shop-grid">
               {products.map((item, i) => {
                   return(<Cards key={i} item={item} />)
               })}
            </div>
        </section>
    )
}

export default Products
