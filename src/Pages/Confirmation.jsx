import { useContext } from "react";
import Cart from "../Components/Cart";
import { useLocation, Link, useNavigate } from "react-router-dom";
import check from "../Assets/confirmationcheck.png";
import { CartContext } from "../Context/CartContext";

const Confirmation = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    clearCart();
    navigate("/products");
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold m-2 mt-10">Confirmation</h1>
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
          <Cart showControls={false} />
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
