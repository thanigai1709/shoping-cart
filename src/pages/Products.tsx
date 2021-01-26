import { useState } from "react";
import { useQuery } from "react-query";
import { CartItemType } from "../types";

// components
import { Drawer, LinearProgress, Grid, Badge, Container } from "@material-ui/core/";
import { AddShoppingCart } from "@material-ui/icons";
import ProductItem from "../components/item/ProductItem";
const fetchProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const Products = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>("products", fetchProducts);
  console.log(data);
  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoleFromCart = () => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <Container>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item sm={4} key={item.id}>
            <ProductItem item={item} handleAddToCart={handleAddToCart}></ProductItem>
          </Grid>
        ))}
      </Grid>
    </Container>  
  );
};

export default Products;
