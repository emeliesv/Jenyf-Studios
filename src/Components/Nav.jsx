/* Navbar containin links, should be responsive and turn into a hamburgermenu in mobile */
import { Link } from "react-router-dom";
import Burger from "./Burger";
import { useState } from "react";

const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleBurger = () => {
    return setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="flex items-center">
      <div className="hidden sm:flex">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link className="mr-4" to="/products">
          All Products
        </Link>
      </div>
      <div className="flex flex-col sm:hidden absolute" onClick={toggleBurger}>
        <Burger isOpen={hamburgerOpen} />
        {hamburgerOpen && (
          <div className="flex flex-col bg-gray-100 pb-4 pr-2 border border-solid border-gray-950 absolute top-10 right-0 mt-1">
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link className="mr-4" to="/products">
              All Products
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
