import { useProducts } from "../Context/ProductContext";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useState } from "react";

const ProductList = ({ selectedCategory }) => {
  const { data, isLoading, isError } = useProducts();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (isError) return <h1>Failed to fetch product</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const filteredData = selectedCategory
    ? data.filter((product) => product.category === selectedCategory)
    : data;

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    if (e.target.value === "") {
      navigate("/products");
    } else {
      navigate(`/products/category/${selected}`);
    }
  };

  return (
    <>
      <fieldset className=" border">
        <legend>Select Category</legend>
        <select value={selectedCategory || ""} onChange={handleCategoryChange}>
          <option value={""}>Select One</option>
          <option value={`men's clothing`}>Men</option>
          <option value={`women's clothing`}>Women</option>
          <option value={`jewelery`}>Jewelery</option>
          <option value={`electronics`}>Electronics</option>
        </select>
      </fieldset>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
        {filteredData.length > 0 ? (
          filteredData
            .slice(page * 4 - 4, page * 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p>No products found for this category</p>
        )}
      </div>
      <div>
        <Pagination count={5} page={page} onChange={handlePageChange} />
      </div>
    </>
  );
};

export default ProductList;
