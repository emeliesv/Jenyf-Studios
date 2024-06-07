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
    <>
      <h1>Confirmation</h1>
      <img
        src={check}
        alt="jenyf studios logo"
        className="w-auto h-40 object-fit"
      />
      <h3>Thank you for ordering from JENYF STUDIOS</h3>
      {formData && (
        <div className="shipping-address">
          <h3>Shipping Address</h3>
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

      <Cart showControls={false} />

      <button type="button" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
    </>
  );
};

export default Confirmation;
