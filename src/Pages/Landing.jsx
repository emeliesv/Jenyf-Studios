import CategoryCard from "../Components/CategoryCard";
import { useProducts } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import hero2 from "../Assets/hero2.jpg";

const Landing = () => {
  const { data, isLoading, isError } = useProducts();

  if (isError) return <h1>Failed to fetch product</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const allCategories = data.map((product) => {
    return product.category;
  });

  const setFirstInCategory = [...new Set(allCategories)];

  const categoryImages = {};

  data.forEach((product) => {
    if (!categoryImages[product.category]) {
      categoryImages[product.category] = product.image;
    }
  });

  const categoryWithImage = setFirstInCategory.map((category) => {
    return {
      category: category,
      image: categoryImages[category],
    };
  });

  return (
    <section className="lg:mx-10 mt-20 md:mx-none sm:mx-none pb-16">
      <div className="relative h-96">
        <img
          src={hero2}
          alt="Three people sitting on the grass laughing"
          className="w-full h-full object-cover object-[center_top_20%]"
        ></img>
        <div></div>
        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white text-2xl sm:text-4xl">
          Hello fall
        </h1>
        <Link to="/products">
          <button className="bg-jenyfNeutralLight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Shop all products
          </button>
        </Link>
      </div>
      <h2 className="text-center font-black pt-10 pb-4 lg:text-xl md:text-lg sm:text-base">
        Fall favorites are here!
      </h2>
      <p className="pt-4 pb-10 px-16 lg:text-base md:text-sm sm:text-xs">
        Discover the latest trends of the season with our wide range of men's
        and women's clothing, perfect for keeping you both warm and stylish
        during the cooler months. Refresh your wardrobe with everything from
        elegant outerwear to comfortable everyday clothes, while also finding
        the latest tech gadgets and stylish jewelry that add the finishing
        touch. Shop now and welcome autumn in style!
      </p>
      <div className="grid gap-8 contain lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
        {categoryWithImage &&
          categoryWithImage.map((categoryImage) => {
            return (
              <div key={categoryImage.category}>
                <Link
                  to={`/products/category/${categoryImage.category}`}
                  className="flex items-center justify-center"
                >
                  <CategoryCard
                    category={categoryImage.category}
                    image={categoryImage.image}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Landing;
