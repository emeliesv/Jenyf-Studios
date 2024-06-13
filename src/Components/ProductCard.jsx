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

    const truncatedDescription = description.split(' ').slice(0, 10).join(' ');

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto tra hover:shadow-2xl transition duration-500 flex flex-col justify-between items-center transform hover:scale-105">
            <Link to={`/product/${product.id}`}><div className="overflow-hidden h-48 py-4 bg-white">
                <img
                    className="object-contain object-center w-full h-full "
                    src={image}
                    alt={title}
                />
            </div></Link>

            <div className="p-4">
                <h5 className="text-lg font-medium text-gray-800 mb-2">{title}</h5>

                <div className="mb-2 flex justify-between items-center">
                    <RatingReview />
                    <span className="text-gray-600">{rating.count} reviews</span>
                </div>

                <span className="text-lg font-semibold text-gray-900">${price}</span>

                <p className="text-sm text-gray-700 mt-2 mb-4 max-h-12 overflow-ellipsis">{truncatedDescription}...</p>

                <div className="flex justify-between">
                    <Link to={`/product/${product.id}`}>
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border-2 border-black rounded-log hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 transition duration-300"
                        >
                            Details
                        </button>
                    </Link>
                    <button
                        type="button"
                        className=" bg-[#BFC1B6] px-4 py-2 text-sm font-medium text-black rounded-log hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 transition duration-300"
                        onClick={() => addToCart(product)}
                    >
                        Add To Cart
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
