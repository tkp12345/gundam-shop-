import { CartType } from "../../graphql/cart";
import CartItem from "./item";

const CartList = ({ items }: { items: CartType[] }) => {
  console.log("item 정보:", items);
  return (
    <ul>
      {items.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default CartList;
