import Cart from "../Components/Cart";
import { Link } from "react-router-dom";
import CheckoutForm from "../Components/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <h2>Your shoppingcart:</h2>
      <Cart showControls={true} />
      <CheckoutForm />
    </>
  );
};

export default Checkout;
