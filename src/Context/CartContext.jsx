import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const productCopy = {
      ...product,
      cartID: Date.now(),
    };
    setCart((prevCart) => [...prevCart, productCopy]);
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartID !== productID));
  };

  const calculateTotalSum = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, calculateTotalSum }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
