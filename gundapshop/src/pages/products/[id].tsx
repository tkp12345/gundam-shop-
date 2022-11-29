import { Link, useParams } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import GET_PRODUCTS, { GET_PRODUCT, Product } from "../../graphql/products";
import ProductDetail from "../../components/product/detail";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<{ product: Product }>(
    [QueryKeys.PRODUCTS, id],
    () => graphqlFetcher(GET_PRODUCT, { id })
  );

  if (!data) return null;

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail item={data.product} />
    </div>
  );
};

export default ProductDetailPage;
