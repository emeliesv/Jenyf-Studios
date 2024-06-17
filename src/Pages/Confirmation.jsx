import { useContext, useEffect } from "react";
import Cart from "../Components/Cart";
import { useLocation, useNavigate } from "react-router-dom";
import check from "../Assets/confirmationcheck.png";
import { CartContext } from "../Context/CartContext";

const Confirmation = () => {
  const location = useLocation();
  const { formData, cart } = location.state || {};

  const { clearCart, setOrderConfirmed, orderConfirmed } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    clearCart();
    navigate("/products");
  };

  useEffect(() => {
    setOrderConfirmed(true);
  }, [orderConfirmed]);

  const calculateConfirmTotal = () => {
    const totalSum = cart.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
    return Math.round(totalSum * 100) / 100;
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold m-2 mt-10">Confirmation</h2>
      <img
        src={check}
        alt="jenyf studios logo"
        className="w-auto h-20 object-fit"
      />
      <h3 className="text-md m-2 text-center">
        Thank you for ordering from JENYF STUDIOS
      </h3>
      <div className="flex flex-col items-center bg-jenyfNeutralLight max-w-lg my-10 mb-40 pt-6">
        {formData && (
          <div>
            <h4 className="font-semibold">Shipping Address</h4>
            <p>
              {formData.firstName} {formData.lastName}
            </p>
            <p>{formData.address}</p>
            <p>
              {formData.city}, {formData.postalCode}
            </p>
            <p>{formData.country}</p>
          </div>
        )}
        <div className="border-black border-y m-6">
          {cart.map((cartItem) => {
            return (
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
                </div>
              </div>
            );
          })}
          <h3 className="text-right my-3 pr-3 font-semibold w-full">
            Total price: {calculateConfirmTotal()} SEK
          </h3>
        </div>

        <button
          className="mx-6 mb-28"
          type="button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </section>
  );
};

export default Confirmation;
