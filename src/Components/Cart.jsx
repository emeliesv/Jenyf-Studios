/* Shoppingcart */
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  let totalSum = 0;

  const calculateTotalSum = () => {
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i].price);
      totalSum += cart[i].price;
    }
    return totalSum;
  };
  calculateTotalSum();

  return (
    <section>
      <h2>This is your shoppingcart:</h2>
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <img src={cartItem.image} alt={cartItem.title} />
            <p>{cartItem.title}</p>
            <p>Price: {cartItem.price}</p>
            <button onClick={() => removeFromCart(cartItem.id)}>
              Remove from cart
            </button>
          </div>
        );
      })}
      <h3 className="border borde-solid border-black m-3 p-2">
        Total price: {totalSum}
      </h3>
    </section>
  );
};

export default Cart;
