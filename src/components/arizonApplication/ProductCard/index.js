import React from "react";
import './index.css'

function ProductCard(props) {
  const product = props.product;
  const { image, title, price } = product;
  return (
    <div className="cart_item">
      <img src={image} alt="product-img" className="cart_image"/>
      <p>{title}</p>
      <h2>{price}</h2>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
