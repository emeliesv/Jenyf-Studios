import Cart from "../Components/Cart";
import { Link } from "react-router-dom";

const orderConfirmed = () => {
  console.log("Order confirmed!");
};

const Checkout = () => {
  return (
    <>
      <h2>Your shoppingcart:</h2>
      <Cart showControls={true} />
      <Link to="/confirmation" className="mr-4">
        Confirmation
      </Link>
    </>
  );
};

export default Checkout;
