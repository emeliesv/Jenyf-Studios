import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, addToCart, calculateTotalSum } =
    useContext(CartContext);

  return (
    <section className=" flex flex-col items-center m-5 border border-solid px-5">
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.cartID} className="flex items-center">
            <img src={cartItem.image} alt={cartItem.title} className="w-28" />
            <p>{cartItem.title}</p>
            <div className="flex flex-col">
              <div className="m-1">
                <p className="text-sm font-semibold ">Price:</p>
                <p className="text-sm font-semibold">{cartItem.price}</p>
              </div>
              <button onClick={() => removeFromCart(cartItem.id)}>-</button>
              <button onClick={() => addToCart(cartItem)}>+</button>
            </div>
          </div>
        );
      })}
      <h3 className="w-80 m-3 p-2 font-semibold">
        Total price: {calculateTotalSum()}
      </h3>
    </section>
  );
};

export default Cart;
