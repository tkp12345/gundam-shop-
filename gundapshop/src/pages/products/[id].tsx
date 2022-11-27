import {Link, useParams} from "react-router-dom";
import React from "react";
import {useQuery} from "react-query";
import {graphqlFetcher, QueryKeys} from "../../queryClient";
import GET_PRODUCTS, {Product} from "../../graphql/products";

const ProductDetailPage = ()=> {
    const {id} = useParams()
    const {data} = useQuery<Product>([QueryKeys.PRODUCTS, id],
        () =>
            graphqlFetcher(GET_PRODUCTS,{id}),

    if (!data) return null;

    const {
        id,
        imageUrl,
        price,
        title,
        description,
        createdAt,
    } = data
    return (
        <div className="product-item">
            <Link to={`/products/${id}`}>
                <p className="product-item__title">{title}</p>
                <span className="product-item__price">₩{price}</span>
                <img className="product-item__image" src={imageUrl}/>
                <p className="product-detail__description">{description}</p>
            </Link>
        </div>
    )
}

export  default ProductDetailPage
