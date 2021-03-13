import { CartItemType } from "../types";
import CartItem from "./item/CartItem";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const TotalAmount = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);
  return (
    <aside className="cart">
      <div className="wrapper">
        <h2>Your shopping cart</h2>
        {cartItems.length === 0 ? <p>no items in the cart.</p> : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}></CartItem>
        ))}
      </div>
      <h2>Total:${TotalAmount(cartItems).toFixed(2)}</h2>
    </aside>
  );
};

export default Cart;
