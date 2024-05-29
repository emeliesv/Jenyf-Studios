import icon from "../assets/Shoppingcart.png";

const ShoppingCart = () => {
  return (
    <div className="w-20 h-20">
      <img
        src={icon}
        alt="Shoppingcart icon"
        className="w-full h-full object-fit"
      />
    </div>
  );
};

export default ShoppingCart;
