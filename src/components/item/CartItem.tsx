import { Button } from "@material-ui/core";
import { CartItemType } from "../../types";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.title}</h3>
        <div className="info">
          <p>Price:${item.price}</p>
          <p>Total:${(item.quantity * item.price).toFixed(2)}</p>
        </div>
        <div className="quantity">
          <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.id)}>
            -
          </Button>
          <p>{item.quantity}</p>
          <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CartItem;
