import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { title, price, image, rating } = product;
  const { addToCart } = useContext(CartContext);

  const RatingStars = () => {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${
              rating.rate >= star ? "text-amber-400" : "text-gray-500"
            } text-2xl`}
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
  return (
    <article className="flex flex-col items-center bg-white shadow-lg hover:shadow-2xl p-8 h-full">
      <Link to={`/products/${urlSafeTitle}`}>
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
            {RatingStars()}
            <p>{rating.count + " reviews"}</p>
            <p className="font-semibold">{price} SEK</p>
          </div>
        </div>
      </Link>

      <div className="flex flex-col lg:hidden w-full">
        <button
          type="button"
          className="w-full bg-jenyfPrimaryBrand"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>

      <div className="hidden lg:flex flex-col items-center">
        <button
          type="button"
          className="bg-jenyfPrimaryBrand hover:bg-jenyfPrimaryBrandHover min-w-24 mt-3"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
