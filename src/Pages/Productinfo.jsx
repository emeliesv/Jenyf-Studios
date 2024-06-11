import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";

const ProductInfo = () => {
  const { productTitle } = useParams();
  const { data, isLoading, isError } = useProducts();
  const { addToCart } = useContext(CartContext);
  const id = localStorage.getItem("lastClickItem");
  console.log("item in ls", id);
  console.log(data);

  if (isError) return <h1>Failed to fetch product</h1>;
  if (isLoading || !data) return <h1>Loading...</h1>;

  const product = data.find((p) => p.id === parseInt(id));

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="mx-auto p-10">
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:spece-y-0">
        <div className="w-full sm:w-1/2 p-8 flex justify-center items-center bg-jenyfNeutralLight">
          <img className="w-4/5" src={product.image} alt={product.title} />
        </div>

        <div className="w-full sm:w-1/2">
          <h1 className="mb-4 text-xl font-bold">{product.title}</h1>
          <div className="mb-4 text-lg">{product.price} SEK</div>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4 text-sm">Category: {product.category}</div>

          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;