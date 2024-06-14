/* Containing productlist, herosection */
import ProductList from "../Components/Productlist";
import { useParams } from "react-router-dom";

const AllProducts = () => {
  const { category } = useParams();

  return (
    <section className="">
      <ProductList selectedCategory={category} />
    </section>
  );
};

export default AllProducts;
