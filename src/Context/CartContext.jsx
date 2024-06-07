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
    setCart((prevCart) => {
      const cartItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === product.id
      );
      if (cartItemIndex !== -1) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === cartItemIndex) {
            return {
              ...cartItem,
              amount: ++cartItem.amount,
            };
          }
          return cartItem;
        });
        return updatedCart;
      } else {
        const productCopy = {
          ...product,
          amount: 1,
          cartID: Date.now(),
        };
        return [...prevCart, productCopy];
      }
    });
  };

  const removeFromCart = (productID) => {
    /* Uppdatera denna med att minska amount, om amount === 1, deleta med cartID */
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
