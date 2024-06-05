/* HEADER containing navbar and logo */
import Nav from "./Nav";
import CartIcon from "./CartIcon";
import logo from "../Assets/logo_large.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center mx-10">
      <img
        src={logo}
        alt="jenyf studios logo"
        className="w-auto h-6 object-fit"
      />
      <div className="hidden sm:flex ">
        <div className="flex flex-row items-center">
          <Nav />
        </div>
        <CartIcon />
      </div>
      <div className="flex sm:hidden">
        <CartIcon />
        <div className="flex flex-row items-center">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
