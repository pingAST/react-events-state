import React from 'react';


const ShopItem = ({ product }) => (
    <div className="shop-item">
        <img src={product.img} alt={product.name} className="item-image" />
        <span className="item-name">{product.name}</span>
        <span className="item-color">{product.color}</span>
        <span className="item-price">${product.price}</span>
        <button className="item-button">Add to cart</button>
    </div>
);

export default ShopItem;