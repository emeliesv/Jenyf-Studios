import Cart from "../Components/Cart";

import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <h2>Confirmation</h2>
      <Cart showControls={false} />
      <div className="text-center m-5">
        <h3>Thank you for your purchase!</h3>
        <Link to="/" className="mr-4">
          Home
        </Link>
      </div>
    </>
  );
};

export default Confirmation;
