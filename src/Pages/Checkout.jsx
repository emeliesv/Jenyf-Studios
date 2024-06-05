import Cart from "../Components/Cart";

const orderConfirmed = () => {
  console.log("Order confirmed!");
};

const Checkout = () => {
  return (
    <>
      <h2>Your shoppingcart:</h2>
      <Cart />
      <button onClick={() => orderConfirmed()}>Confirm order</button>
    </>
  );
};

export default Checkout;
