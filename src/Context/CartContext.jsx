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
      const existingProduct = prevCart.find(
        (cartItem) => cartItem.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, amount: cartItem.amount + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...product, amount: 1, cartID: Date.now() }];
      }
    });
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((cartItem) => {
          if (cartItem.id === productID) {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount > 0);
      return updatedCart;
    });
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
