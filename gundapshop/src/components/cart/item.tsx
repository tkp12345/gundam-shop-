import { CartType } from "../../graphql/cart";

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => (
  <li>{id}</li>
);

export default CartItem;
