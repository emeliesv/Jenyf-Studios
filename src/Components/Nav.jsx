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
    <nav className="w-auto">
      <ul className="hidden sm:flex justify-between gap-12">
        <Link
          to="/"
          className="hover:underline underline-offset-4 decoration-2"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="hover:underline underline-offset-4 decoration-2"
        >
          All Products
        </Link>
      </ul>
      <div
        className="flex flex-col sm:hidden h-full ml-4"
        onClick={toggleBurger}
      >
        <Burger isOpen={hamburgerOpen} />
        {hamburgerOpen && (
          <ul className="flex flex-col bg-gray-100 pb-4 pl-2 border border-solid border-gray-950 absolute top-10 right-0 mt-4">
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link className="mr-4" to="/products">
              All Products
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
