import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ cards }) => (
    <div className="cards-view">
        {cards.map((product, index) => (
            <ShopCard key={index} product={product} />
        ))}
    </div>
);

export default CardsView;