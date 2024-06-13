import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { title, price, description, image, rating } = product;
  const [ratingOfCurrentProduct, setRating] = useState(rating.rate);
  const { addToCart } = useContext(CartContext);

  const RatingReview = () => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: "pointer",
              color: ratingOfCurrentProduct >= star ? "gold" : "gray",
              fontSize: "1.25rem",
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
  const truncatedDescription = description.split(" ").slice(0, 10).join(" ");

  return (
    <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl row-span-1">
      {/* <Link to={`/products/${urlSafeTitle}`}> */}
      <div className="overflow-hidden h-48 py-4 bg-white">
        <img
          className="object-contain object-center w-full h-full "
          src={image}
          alt={title}
        />
      </div>
      {/* 
      </Link> */}
      <div className="p-4">
        <h5 className="text-lg font-medium text-gray-800 mb-2 p-4">{title}</h5>
        <div className="mb-2 flex justify-between items-center">
          <RatingReview />
          <span className="text-gray-600">{rating.count} reviews</span>
        </div>

        <span className="text-lg font-semibold text-gray-900">${price}</span>

        <p className="text-sm text-gray-700 mt-2 mb-4 max-h-12 overflow-ellipsis">
          {truncatedDescription}...
        </p>

        <div className="flex flex-col lg:hidden">
          <button
            type="button"
            className="w-full"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
          <Link to={`/products/${urlSafeTitle}`}>
            <button
              type="button"
              onClick={() => localStorage.setItem("lastClickItem", product.id)}
              className="w-full my-4"
            >
              Details
            </button>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-row">
          <Link to={`/products/${product.id}`}>
            <button
              type="button"
              onClick={() => localStorage.setItem("lastClickItem", product.id)}
              className=""
            >
              Details
            </button>
          </Link>
          <button type="button" className="" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
