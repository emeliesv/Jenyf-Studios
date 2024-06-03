/* HEADER containing navbar and logo */
import Nav from "./Nav";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center mx-10">
      <h1 className="font-bold">Jenyf Studios</h1>
      <div className="hidden sm:flex">
        <div className="flex flex-row items-center">
          <Nav />
        </div>
        <Link to="/checkout">
          <CartIcon />
        </Link>
      </div>
      <div className="flex sm:hidden">
        <Link to="/checkout">
          <CartIcon />
        </Link>
        <div className="flex flex-row items-center">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
