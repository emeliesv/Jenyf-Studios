/* HEADER containing navbar and logo */
import Nav from "./Nav";
import CartIcon from "./CartIcon";
import logo from "../Assets/logo_large.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 z-10 bg-jenyfPrimaryBrand font-semibold px-8">
      <Link to="/">
        <img
          src={logo}
          alt="jenyf studios logo"
          className="w-auto h-4 object-contain"
        />
      </Link>
      {/* Render navbar conditionally depending on screensize */}
      <div className=" w-3/5 hidden sm:flex justify-between">
        <div className="flex items-center">
          <Nav />
        </div>
        <Link to="/checkout">
          <CartIcon />
        </Link>
      </div>
      <div className="flex sm:hidden ">
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
