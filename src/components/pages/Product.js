import React, {useContext} from "react";
import Amount from '../Amount';
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const Product = () => {
  const { id } = useParams();
  const selector = parseInt(id);
  const { products, addCart } = useContext(GlobalContext);

  const item = products.filter((product) => product.id === selector );
  
  let not = 'Add to Cart';
  if (item[0].inCart === false) {
    not = 'Add to Cart';
  } else if (item[0].inCart === true) {
    not = 'Item in Cart';
  }


  return (
    <section id="product">
      <div id="product-flex">
        <div id="product-img">
          <img src={`../${item[0].image}`} alt="" />
        </div>
        <div id="product-info">
          <h1>{item[0].name}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            consectetur, amet quae illum deserunt dolorum praesentium
            consequatur ad, aliquid magnam, aspernatur quibusdam quo id mollitia
            nisi veniam odio et architecto.
          </p>
          <h2>${item[0].price}</h2>
          <Amount item={item[0]} />
          <div id="product-btn">
            <button onClick={(e) => addCart(item[0].id)}>{not}</button>
            <Link to="/" >Back to Shop</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
