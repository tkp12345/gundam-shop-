import { Product } from "../../graphql/products";
import React from "react";

const ProductDetail = ({
  item: { title, imageUrl, description, price },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <p className="product-detail__category">{title}</p>
    <span className="product-detail__price">₩{price}</span>
    <img className="product-detail__image" src={imageUrl} />
    <p className="product-detail__description">{description}</p>
  </div>
);

export default ProductDetail;
