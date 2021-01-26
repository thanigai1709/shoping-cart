import { useState } from "react";
import { useQuery } from "react-query";
import { CartItemType } from "../types";

// components
import { Drawer, LinearProgress, Grid, Badge, Container, Button } from "@material-ui/core/";
import { AddShoppingCart } from "@material-ui/icons";
import ProductItem from "../components/item/ProductItem";
import Cart from "../components/Cart";
const fetchProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products?limit=30")).json();
};

const Products = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>("products", fetchProducts);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddToCart = () => null;
  const handleRemoleFromCart = () => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <Container>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoleFromCart}></Cart>
      </Drawer>
      <div className="navbar">
        <Button onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)}>
            <AddShoppingCart />
          </Badge>
        </Button>
      </div>
      <div className="main-wrap">
        <Grid container spacing={5}>
          {data?.map((item) => (
            <Grid item md={4} sm={6} key={item.id}>
              <ProductItem item={item} handleAddToCart={handleAddToCart}></ProductItem>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Products;
