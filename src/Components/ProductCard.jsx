import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

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
  
  const urlSafeTitle = title
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/-+$/, "")
    .toLowerCase();
  /*   const truncatedDescription = description.split(" ").slice(0, 10).join(" ");
   */
  return (
    <Link to={`/products/${urlSafeTitle}`}>
      <div className="flex flex-col items-center bg-white shadow-lg hover:shadow-2xl p-8 h-full">
        <div
          className="h-full"
          onClick={() => localStorage.setItem("lastClickItem", product.id)}
        >
          <div className="h-48 py-4">
            <img
              src={image}
              alt={title}
              className="object-contain object-center w-full h-full "
            />
          </div>
          <div>
            <h5 className="text-md font-medium text-jenyfPrimaryText min-h-20">
              {title}
            </h5>
            {RatingReview()}
            <p>{rating.count + " reviews"}</p>
            <p className="font-semibold">{price} SEK</p>
            {/* <p className="h-20 text-sm text-jenyfPrimaryText overflow-ellipsis">
              {truncatedDescription}...
            </p> */}
          </div>
        </div>

        <div className="flex flex-col lg:hidden">
          <button
            type="button"
            className="w-full bg-jenyfPrimaryBrand"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
          {/* <Link to={`/products/${urlSafeTitle}`}>
            <button
              type="button"
              onClick={() => localStorage.setItem("lastClickItem", product.id)}
              className="w-full my-4"
            >
              Details
            </button>
          </Link> */}
        </div>

        <div className="hidden lg:flex flex-col items-center">
          <button
            type="button"
            className="bg-jenyfPrimaryBrand min-w-24 mt-3"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
