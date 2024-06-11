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
                        className="star"
                        style={{
                            cursor: 'pointer',
                            color: ratingOfCurrentProduct >= star ? 'gold' : 'gray',
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

    return (
        <div className="bg-[#3c3b36] rounded-md backdrop-filter backdrop-blur-md bg-opacity-70 border border-gray-100 flex flex-col justify-between p-4 w-full max-w-xs mx-auto">
            <div className="flex justify-center items-center overflow-hidden rounded-lg bg-white h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 w-full">
                <img
                    className="transition duration-500 ease-in-out transform hover:scale-90 max-h-full max-w-full object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="flex flex-col mt-4">
                <h5 className="text-base sm:text-lg md:text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 mb-2">
                    {title}
                </h5>
                <div className="flex flex-col mb-4 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-200">
                    <div className="flex justify-between items-center mb-2">
                        <RatingReview />
                        <span>{rating.count} reviews</span>
                    </div>
                    <span className="font-bold">${price}</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-200 h-20 overflow-hidden truncate mb-4">
                    {description}
                </p>
                <button
                    type="button"
                    className="mb-2 border-none text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 transition duration-500 ease-in-out py-1 sm:py-2 md:py-3 w-full"
                    onClick={() => addToCart(product)}
                >
                    Add To Cart
                </button>
                <Link to={`/product/${product.id}`} className="flex-1 w-full">
                    <button
                        type="button"
                        className="w-full border-none text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 transition duration-500 ease-in-out py-1 sm:py-2 md:py-3"
                    >
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;

