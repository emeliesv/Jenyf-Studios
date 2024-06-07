import { useProducts } from "../Context/ProductContext";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductList = () => {
  const { data, isLoading, isError } = useProducts();
  const [category, setCategory] = useState(``);

  if (isError) return <h1>Failed to fetch product</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12 mb-8">
      <fieldset className=" mb-4">
        <select
          className="w-full sm:w-1/4 py-2 pl-3 pr-16 text-base border-none rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value={""}>Select a category</option>
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
    </div>
  );
};

export default ProductList;
