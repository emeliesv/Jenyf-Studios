import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;
  const [ratingOfCurrentProduct, setRating] = useState(rating.rate);
  const { addToCart } = useContext(CartContext);

  const RatingReview = () => {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className="star"
            style={{
              cursor: "pointer",
              color: ratingOfCurrentProduct >= star ? "gold" : "gray",
              fontSize: `35px`,
            }}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const urlSafeTitle = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="container mx-auto max-w-sm h-full w-full bg-[#3c3b36] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border border-gray-100 flex flex-col justify-between">
      <div className="overflow-hidden rounded-lg bg-white grid items-center">
        <img
          className="transition duration-500 ease-in-out transform hover:scale-90 h-96"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-6 container flex flex-col">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <h6 className="mb-4 font-medium text-m text-neutral-600 dark:text-neutral-200">
          {RatingReview()}
          {rating.count + " reviews"}
          <br />
          {price}
        </h6>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 h-20 overflow-hidden mb-12 truncate">
          {description}
        </p>
        <div className="flex justify-between">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 transition duration-500 ease-in-out"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
          <button onClick={() => localStorage.setItem('lastClickItem', product.id)}
            type="button"
            className="inline-flex-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 transition duration-500 ease-in-out transform hover:scale-100"
          >
            <Link to={`/products/${urlSafeTitle}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
