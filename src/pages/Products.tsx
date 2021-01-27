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
  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.quantity, 0);
  const handleAddToCart = (addedItem: CartItemType) => {
    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === addedItem.id);
      if (isItemInCart) {
        return prev.map((item) => (item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      // First time the item is added
      return [...prev, { ...addedItem, quantity: 1 }];
    });
  };
  const handleRemoleFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        console.log("ack", ack);
        console.log("item", item);
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <Container>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoleFromCart}></Cart>
      </Drawer>
      <div className="navbar">
        <Button onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
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
