import Cart from "../Components/Cart";

import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <h2>Confirmation</h2>
      <Cart />
      <Link to="/" className="mr-4">
        Home
      </Link>
    </>
  );
};

export default Confirmation;
