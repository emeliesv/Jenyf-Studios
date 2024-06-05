import { useProducts } from "../Context/ProductContext";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductList = () => {
  const { data, isLoading, isError } = useProducts();
  const [category, setCategory] = useState(``);

  if (isError) return <h1>Failed to fetch product</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <fieldset className=" border">
        <legend>Select Category</legend>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value={""}>Select One</option>
          <option value={`men's clothing`}>Men</option>
          <option value={`women's clothing`}>Women</option>
          <option value={`jewelery`}>Jewelery</option>
          <option value={`electronics`}>Electronics</option>
        </select>
      </fieldset>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {data &&
          data.map((product) => {
            return category === product.category || category === "" ? (
              <ProductCard key={product.id} product={product} />
            ) : null;
          })}
      </div>
    </>
  );
};

export default ProductList;
