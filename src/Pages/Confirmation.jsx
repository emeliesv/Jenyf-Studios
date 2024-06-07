import Cart from "../Components/Cart";
import { Link } from "react-router-dom";
import check from "../Assets/confirmationcheck.png";

const Confirmation = () => {
  return (
    <>
      <h1>Confirmation</h1>
      <img
        src={check}
        alt="jenyf studios logo"
        className="w-auto h-40 object-fit"
      />
      <h3>Thank you for ordering from JENYF STUDIOS</h3>
      <Cart showControls={false} />
      <div className="text-center m-5">
        <Link to="/" className="mr-4">
          Home
        </Link>
      </div>
    </>
  );
};

export default Confirmation;
