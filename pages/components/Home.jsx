import React from "react";
import ProductCard from "./ProductCard";
import { productList } from "../api/hello";

import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({ type: "addToCart", payload: options });
    toast.success("added to cart");
  };

  const dispatch = useDispatch();
  return (
    <div className="home">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          id={product.id}
          price={product.price}
          handler={addToCartHandler}
          imgSrc={product.image}
        />
      ))}
    </div>
  );
};

export default Home;
