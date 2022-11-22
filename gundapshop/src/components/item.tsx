import React from 'react';
import { Product } from '../types';

const ProductItem = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title
 }:Product) => {
    return (
        <li className="product-item">
                <p className="product-item__title">{title}</p>
                <span className="product-item__price">₩{price}</span>
            <img src={image}/>
                담기
        </li>
    );
};

export default ProductItem;