import { useState } from "react";
// types
import { CartItemType } from "../types";
import CartItem from "./item/CartItem";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <aside className="cart">
      <div className="wrapper">
        <h2>Your shopping cart</h2>
        {cartItems.length === 0 ? <p>no items in the cart.</p> : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}></CartItem>
        ))}
      </div>
    </aside>
  );
};

export default Cart;
