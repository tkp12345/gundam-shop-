import { QueryClient, useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import ProductItem from "../../components/product/item";
import GET_PRODUCTS, { PRODUCTS } from "../../graphql/products";

const ProductList = () => {
  const { data } = useQuery<PRODUCTS>(QueryKeys.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS)
  );
  console.log(data);
  return (
    <div>
      <ul>
        {data?.products?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
