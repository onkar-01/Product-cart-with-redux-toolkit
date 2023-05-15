import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Image from "next/image";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const state = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const incrementHandler = (id) => {
    dispatch({ type: "increment", payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "removeFromCart", payload: id });
    toast.success("Removed from cart");
  };

  const decrementHandler = (id) => {
    console.log(id);
    dispatch({ type: "decrement", payload: id });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              id={item.id}
              price={item.price}
              imgSrc={item.imgSrc}
              quantity={item.quantity}
              increment={(id) => {
                incrementHandler(id);
              }}
              decrement={(id) => {
                decrementHandler(id);
              }}
              deletehandler={(id) => {
                removeFromCart(id);
              }}
            />
          ))
        ) : (
          <h1>Cart is empty</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${state.subTotal}</h2>
        <h2>Shipping: ${state.shipping}</h2>
        <h2>Tax: ${state.tax}</h2>
        <h2>Total: ${state.total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  name,
  id,
  price,
  imgSrc,
  quantity,
  increment,
  decrement,
  deletehandler,
}) => (
  <div className="cartItem">
    <Image
      loader={() => imgSrc}
      src={imgSrc}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <article>
      <h4>{name}</h4>
      <h4>${price}</h4>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{quantity}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete
      onClick={() => {
        deletehandler(id);
      }}
    />
  </div>
);

export default Cart;
