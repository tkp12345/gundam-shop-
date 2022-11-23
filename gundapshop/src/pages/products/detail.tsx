import {Link, useParams} from "react-router-dom";
import React from "react";
import {useQuery} from "react-query";
import {Product} from "../../types";
import {fetcher, QueryKeys} from "../../queryClient";

const ProductDetailPage = ()=> {
    const {id} = useParams()
    const {data} = useQuery<Product>([QueryKeys.PRODUCTS, id],
        () =>
            fetcher({
                method: 'GET',
                path: `/products/${id}`
            }),
    )

    if (!data) return null;

    const {
        title,
        price,
        image,
        description,
    } = data
    return (
        <div className="product-item">
            <Link to={`/products/${id}`}>
                <p className="product-item__title">{title}</p>
                <span className="product-item__price">₩{price}</span>
                <img className="product-item__image" src={image}/>
                <p className="product-detail__description">{description}</p>
            </Link>
        </div>
    )
}

export  default ProductDetailPage