/* HEADER containing navbar and logo */
import Nav from "./Nav";
import CartIcon from "./CartIcon";
const Header = () => {
  return (
    <header className="flex justify-between items-center mx-20">
      <h1 className="font-bold">Jenyf Studios</h1>
      <div className="flex flex-row items-center">
        <Nav />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
