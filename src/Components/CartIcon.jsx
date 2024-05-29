import { useContext, useState } from "react";
import icon from "../Assets/Shoppingcart.png";
import { CartContext } from "../Context/CartContext";

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="w-36 h-20 flex justify-evenly items-center bg-slate-600">
      <img
        src={icon}
        alt="Shoppingcart icon"
        className="w-10 h-10 object-fit"
      />
      <p className="text-white font-semibold">Cart</p>
      <div className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
        <p
          className={`text-sm font-bold ${
            cart.length < 1 ? "text-slate-300" : "text-black"
          }`}
        >
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
