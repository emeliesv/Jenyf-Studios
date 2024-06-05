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
      amount: 1,
    };
    setCart((prevCart) => {
      const updatedCart = [...prevCart, productCopy];
      const indexProductInCart = updatedCart.findIndex(
        (item) => item.cartID == productCopy.cartID
      );
      console.log("The updated cart", updatedCart);
      console.log("The new product is at:", indexProductInCart);
      console.log("The new product", updatedCart[indexProductInCart]);
      /* Här ska kod läggas in för att undersöka om produkten finns i varukorgen.
      Om så är fallet ska amount ökas med 1, annars ska produkten bara läggas till.
      Förmodligen behöver man göra if-statement innan rad 15 och 
      undersöka om det finns en produkt med product.id i cart. Då behöver
      vi nog ta in cart som parameter också. */
      return updatedCart;
    });
  };

  /*
  Felaktig chatGPT:
  setCart((prevCart) => {
      const productInCart = prevCart.findIndex(
        (cartItem) => cartItem.id === product.id
      );
      if (productInCart >= 0) {
        updatedCart = [...prevCart];
        updatedCart[productInCart] = {
          ...updatedCart[productInCart],
          amount: (updatedCart[productInCart].amount || 1) + 1,
        };
        return updatedCart;
      } else {
        const productCopy = {
          ...product,
          cartID: Date.now(),
          amount: 1,
        };
        return [...prevCart, productCopy];
      }
    });
  */

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
