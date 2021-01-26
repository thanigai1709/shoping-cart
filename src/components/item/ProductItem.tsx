import { CartItemType } from "../../types";
import { Button } from "@material-ui/core";
type Props = {
  item: CartItemType;
  handleAddToCart: (addedItem: CartItemType) => void;
};

const ProductItem: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div className="product-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description.length < 120 ? `${item.description}` : `${item.description.substring(0, 117)}...`}</p>
        <h3>${item.price}</h3>
      </div>
      <button onClick={() => handleAddToCart(item)}>Add to cart</button>
    </div>
  );
};
export default ProductItem;
