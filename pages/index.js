import Home from "./components/Home";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

import { Toaster } from "react-hot-toast";
const index = () => {
  return (
    <div>
      <Home />
      <Toaster />
    </div>
  );
};

export default index;
