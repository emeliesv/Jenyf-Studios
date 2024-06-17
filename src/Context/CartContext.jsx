import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  console.log("ordeConfirmed i context:", orderConfirmed);
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

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalSum = () => {
    const totalSum = cart.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
    return Math.round(totalSum * 100) / 100;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        calculateTotalSum,
        clearCart,
        orderConfirmed,
        setOrderConfirmed,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
