import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({ items }) => (
    <div className="list-view">
        {items.map((product, index) => (
            <ShopItem key={index} product={product} />
        ))}
    </div>
);

export default ListView;