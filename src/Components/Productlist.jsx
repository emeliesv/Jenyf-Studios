import { useProducts } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { data, isLoading, isError } = useProducts();
  const { addToCart } = useContext(CartContext);

  if (isError) return <h1>Failed to fetch product</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {data &&
        data.map((product) => {
          return (
            <div key={product.id} className="mb-4 mt-4">
              <Link to={`/product/${product.id}`}>
                <h1 className="font-bold">{product.title}</h1>
              </Link>
              <img src={product.image} alt={product.title} className="w-40" />
              <p>{product.description}</p>
              <div>{product.category}</div>
              <div> ${product.price}</div>
              <div>
                {product.rating.rate} ({product.rating.count} reviews)
              </div>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
