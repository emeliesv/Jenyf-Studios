import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import icon from "../Assets/shoppingbag.png";

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="w-36 h-20 flex justify-normal items-center p-4">
      <img src={icon} alt="Shoppingcart icon" className="w-6 h-6 object-fit" />
      <p className="text-white font-semibold"></p>
      <div className="w-5 h-5 border border-solid border-gray-500 rounded-full flex justify-center items-center bg-white mx-2">
        <p
          className={`text-sm font-bold ${
            cart.length < 1 ? "text-slate-300" : "text-black"
          }`}>
          {cart.length}
        </p>
      </div>
    </div>
  );
};

export default CartIcon;
/* Om man vill ha siffran intu vagnen:
yttre div: relative
div med siffra: absolute z-10 top-1 right-1  */
