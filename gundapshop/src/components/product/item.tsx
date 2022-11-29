import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
import { graphqlFetcher } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";
import { useMutation } from "react-query";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, {
      id,
    })
  );

  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <p className="product-item__title">{price}</p>
        <img className="product-item__image" src={imageUrl} />
      </Link>
      <button className="product-item_add-cart" onClick={() => addCart(id)}>
        담기
      </button>
    </li>
  );
};

export default ProductItem;
