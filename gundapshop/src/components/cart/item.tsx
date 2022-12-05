import { CartType, GET_CART, UPDATE_CART } from "../../graphql/cart";
import ItemData from "./itemData";
import { ForwardedRef, SyntheticEvent } from "react";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import { useMutation, useQuery } from "react-query";

const CartItem = (
  { id, imageUrl, price, title, createdAt, amount }: CartType,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount }),
    {
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries(QueryKeys.CART);
        const prevCart = queryClient.getQueryData<{ [key: string]: CartType }>(
          QueryKeys.CART
        );
        if (!prevCart?.[id]) return prevCart;

        const newCart = {
          ...(prevCart || {}),
          [id]: { ...prevCart[id], amount },
        };
        queryClient.setQueryData(QueryKeys.CART, newCart);
        return prevCart;
      },
      onSuccess: (newValue) => {
        //item  하나에 대한 데이터
        const prevCart = queryClient.getQueryData<{ [key: string]: CartType }>(
          QueryKeys.CART
        );
        const newCart = {
          ...(prevCart || {}),
          ...newValue,
        };
        queryClient.setQueryData(QueryKeys.CART, { cart: newCart }); // Cart wjscp dp eogks epdlxj
      },
    }
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart({ id, amount });
  };

  return (
    <li className="cart-item">
      <input
        className="cart-item__checkbox"
        type="checkbox"
        name="select-item"
        onChange={handleUpdateAmount}
      />
      <ItemData imageUrl={imageUrl} price={price} title={title} />)
    </li>
  );
};

export default CartItem;
