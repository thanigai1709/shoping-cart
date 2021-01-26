import { CartItemType } from "../../types";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item}</h3>
    </div>
  );
};

export default CartItem;
