import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

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
            <Link to ={`/products/${id}`}>
                <p className="product-item__title">{title}</p>
                <span className="product-item__price">₩{price}</span>
            <img className="product-item__image" src={image}/>
                담기
            </Link>
        </li>
    );
};

export default ProductItem;