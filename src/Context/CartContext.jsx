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

  {
    /* Behöver modifiera så att inte ex alla väskor försvinner om man vill ta bort en väska. T.ex  */
  }
  const removeFromCart = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartID !== productID));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
