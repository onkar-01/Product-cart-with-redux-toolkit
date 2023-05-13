// Purpose: header component for the website
import Link from "next/link";
import { useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    cartItems;
  });
  return (
    <nav>
      <h2>Logo here..</h2>
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/cart"}>
          <FiShoppingBag size={24} />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default header;
