import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import payment1 from "../Assets/payment1.png";
import payment2 from "../Assets/payment2.png";
import payment3 from "../Assets/payment3.png";
import payment4 from "../Assets/payment4.png";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postalCode: "",
    city: "",
  });
  const { clearCart } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel the order?")) {
      clearCart();
      navigate("/");
    }
  };

  const handleClick = (imageID) => {
    setSelectedImage(imageID);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { formData } });
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="payment-icons">
        <img
          src={payment1}
          alt="payment1"
          onClick={() => handleClick(1)}
          className={`w-auto h-6 object-fit m-2 hover:border hover:border-black ${
            selectedImage === 1
              ? "border border-black"
              : "border border-transparent"
          } cursor-pointer`}
        />
        <img
          src={payment2}
          alt="payment2"
          onClick={() => handleClick(2)}
          className={`w-auto h-6 object-fit m-2 hover:border hover:border-black ${
            selectedImage === 2
              ? "border border-black"
              : "border border-transparent"
          } cursor-pointer`}
        />
        <img
          src={payment3}
          alt="payment3"
          onClick={() => handleClick(3)}
          className={`w-auto h-6 object-fit m-2 hover:border hover:border-black ${
            selectedImage === 3
              ? "border border-black"
              : "border border-transparent"
          } cursor-pointer`}
        />
        <img
          src={payment4}
          alt="payment4"
          onClick={() => handleClick(4)}
          className={`w-auto h-6 object-fit m-2 hover:border hover:border-black ${
            selectedImage === 4
              ? "border border-black"
              : "border border-transparent"
          } cursor-pointer`}
        />
      </div>
      <div className="form-buttons">
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" onClick={() => clearCart()}>
          {" "}
          {/* Behöver justeras så man inte kan confirma om inte alla fält är ifyllda*/}
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
