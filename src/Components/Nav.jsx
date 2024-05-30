/* Navbar containin links, should be responsive and turn into a hamburgermenu in mobile */
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link className="mr-4" to="/products">
        All Products
      </Link>
    </nav>
  );
};

export default Nav;
