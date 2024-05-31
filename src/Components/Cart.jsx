import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, calculateTotalSum } = useContext(CartContext);

  return (
    <section>
      <h2>This is your shoppingcart:</h2>
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.cartID}>
            <img src={cartItem.image} alt={cartItem.title} />
            <p>{cartItem.title}</p>
            <p>Price: {cartItem.price}</p>
            <button onClick={() => removeFromCart(cartItem.cartID)}>
              Remove from cart
            </button>
          </div>
        );
      })}
      <h3 className="border borde-solid border-black m-3 p-2">
        Total price: {calculateTotalSum()}
      </h3>
    </section>
  );
};

export default Cart;
