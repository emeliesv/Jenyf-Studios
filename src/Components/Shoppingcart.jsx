import icon from "../Assets/Shoppingcart.png";

const ShoppingCart = () => {
  return (
    <div className="w-36 h-20 flex justify-evenly items-center bg-slate-600">
      <img
        src={icon}
        alt="Shoppingcart icon"
        className="w-10 h-10 object-fit"
      />
      <p className="text-white font-semibold">Cart</p>
      <div className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
        <p className="text-sm font-bold">1</p>
      </div>
    </div>
  );
};

export default ShoppingCart;

/* Om man vill ha siffran intu vagnen:
yttre div: relative
div med siffra: absolute z-10 top-1 right-1  */
