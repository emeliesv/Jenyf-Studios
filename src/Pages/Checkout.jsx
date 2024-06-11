import Cart from "../Components/Cart";
import CheckoutForm from "../Components/CheckoutForm";

const Checkout = () => {
  return (
    <main className="mb-10 mx-2 lg:mx-40">
      <h2 className="font-semibold my-4">YOUR SHOPPING CART:</h2>
      <div className="flex flex-col md:flex-row">
        <Cart showControls={true} />
        <CheckoutForm />
      </div>
    </main>
  );
};

export default Checkout;
