import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // Perform any necessary side effects here
  }, []);

  return (
    <nav>
      <h2>Logo here..</h2>
      <div>
        <Link href="/">Home</Link>
        <Link href="/cart">
          <FiShoppingBag size={24} />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
