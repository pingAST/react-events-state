import React from 'react';


const ShopCard = ({ product }) => (
    <div className="shop-card">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-color">{product.color}</p>
            <div className="card-image-container">
                    <img src={product.img} alt={product.name} className="card-image" />
            </div>
            <div className="card-footer">
                    <span className="card-price">${product.price}</span>
                    <button className="card-button">Add to cart</button>
            </div>
    </div>
);

export default ShopCard;