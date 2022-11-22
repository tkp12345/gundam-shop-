import {QueryClient, useQuery} from "react-query";
import {fetcher, QueryKeys} from "../../queryClient";
import {Product} from "../../types";
import ProductItem from "../../components/item";

const ProductList = () => {

    const {data} = useQuery<Product[]>(QueryKeys.PRODUCTS,()=>
        fetcher({
            method:'GET',
            path:'/products'
        })
    )
        console.log(data)
   return  (
       <div>
           <ul>
               {data?.map(product =>(
                   <ProductItem {...product} key={product.id}/>)
               )}
           </ul>
       </div>
   )
}
export default ProductList
