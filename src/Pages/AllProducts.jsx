/* Containing productlist, herosection */
import ProductList from "../Components/Productlist";
import { useParams } from "react-router-dom";

const AllProducts = () => {
  const { category } = useParams();

  console.log("categoryURL:", category);

  return (
    <section>
      <h2>Our products:</h2>
      <ProductList selectedCategory={category} />
    </section>
  );
};

export default AllProducts;
