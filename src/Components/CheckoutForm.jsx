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
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = (imageID) => {
    setSelectedImage(imageID);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { formData } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full sm:mx-2 lg:w-1/2 lg:mx-4"
    >
      <div className="flex justify-between mb-2 flex-col w-full md:flex-row">
        <div className="flex flex-col w-full lg:w-1/2">
          <label className="text-xs mt-3 md:mt-0 mb-2">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="sm:mr-4 lg:mr-4 p-2 border border-solid"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <label className="text-xs mt-3 md:mt-0 mb-2">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="p-2 border border-solid"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs mt-3 mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border border-solid"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs mt-3 mb-2">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="p-2 border border-solid"
        />
      </div>
      <div className="flex flex-row w-full justify-between mb-2">
        <div className="flex flex-col w-1/3">
          <label className="text-xs mt-3 mb-2">Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className=" mr-4 p-2 border border-solid"
          />
        </div>
        <div className="flex flex-col w-2/3">
          <label className="text-xs mt-3 mb-2">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="p-2 border border-solid"
          />
        </div>
      </div>
      <div className="payment-icons flex flex-col">
        <p className="text-sm font-semibold mt-6">Payment methods:</p>
        <div className=" flex flex-row mb-6">
          <img
            src={payment1}
            alt="payment1"
            onClick={() => handleClick(1)}
            className={`w-auto h-10 object-fit mr-2 mt-2 hover:border hover:border-black ${
              selectedImage === 1
                ? "border border-black"
                : "border border-transparent"
            } cursor-pointer`}
          />
          <img
            src={payment2}
            alt="payment2"
            onClick={() => handleClick(2)}
            className={`w-auto h-10 object-fit m-2 hover:border hover:border-black ${
              selectedImage === 2
                ? "border border-black"
                : "border border-transparent"
            } cursor-pointer`}
          />
          <img
            src={payment3}
            alt="payment3"
            onClick={() => handleClick(3)}
            className={`w-auto h-10 object-fit m-2 hover:border hover:border-black ${
              selectedImage === 3
                ? "border border-black"
                : "border border-transparent"
            } cursor-pointer`}
          />
          <img
            src={payment4}
            alt="payment4"
            onClick={() => handleClick(4)}
            className={`w-auto h-10 object-fit m-2 hover:border hover:border-black ${
              selectedImage === 4
                ? "border border-black"
                : "border border-transparent"
            } cursor-pointer`}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-2 mr-4 border border-solid border-black bg-jenyfPrimaryBrand hover:bg-jenyfPrimaryBrandHover font-semibold"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
