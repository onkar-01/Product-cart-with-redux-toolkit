import React from "react";
import Image from "next/image";
const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="productCard">
      <Image
        loader={() => imgSrc}
        src={imgSrc}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ id, name, price, imgSrc, quantity: 1 })}>
        add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
