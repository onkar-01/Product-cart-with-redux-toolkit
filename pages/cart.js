import React from "react";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/Cart";
import { Toaster } from "react-hot-toast";

const cart = () => {
  return (
    <div>
      <CartItem />
      <Toaster />
    </div>
  );
};

export default cart;
