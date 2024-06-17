import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = ({ showControls, confirmationCart }) => {
  const { cart, removeFromCart, addToCart, calculateTotalSum, clearCart } =
    useContext(CartContext);

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel the order?")) {
      clearCart();
      navigate("/");
    }
  };

  const finalCart = confirmationCart ?? cart;

  return (
    <section className=" flex flex-col justify-between h-1/2 my-5 bg-white sm:w-full sm:mx-2 lg:w-1/2">
      {finalCart.map((cartItem) => (
        <div key={cartItem.cartID} className="flex items-center">
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className="m-6 w-1/3 lg:1/2"
          />
          <div className="w-2/3 mr-4 flex-col md:flex-row">
            <div className="flex flex-col">
              <p className="font-semibold text-xs md:text-sm lg:text-base mb-4">
                {cartItem.title}
              </p>
              <p className="text-xs">Amount: {cartItem.amount}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              {showControls && (
                <div>
                  <button
                    onClick={() => removeFromCart(cartItem.id)}
                    className="border border-solid border-black py-0 md:py-1 min-w-8 md:min-w-12 mr-2 mt-2 mb-4"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToCart(cartItem)}
                    className="border border-solid border-black py-0 md:py-1 min-w-8 md:min-w-12"
                  >
                    +
                  </button>
                </div>
              )}
              <div className="m-1 flex flex-row text-xs">
                {cartItem.amount > 1 && <p>{cartItem.amount} x&nbsp;</p>}
                <p className="text-xs">{cartItem.price} SEK</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-row justify-between">
        {showControls && (
          <button
            type="button"
            onClick={handleCancel}
            className="w-2/5 p-4 ml-2 text-xxs text-start md:text-xs font-medium underline border-none"
          >
            Empty shopping cart
          </button>
        )}

        <h3 className="text-right my-3 pr-3 font-semibold w-full">
          Total price: {calculateTotalSum()} SEK
        </h3>
      </div>
    </section>
  );
};

export default Cart;
