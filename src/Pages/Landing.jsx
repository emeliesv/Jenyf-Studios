import CategoryCard from "../Components/CategoryCard";
import { useProducts } from "../Context/ProductContext";
import { Link } from "react-router-dom";

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
    <main className="mx-40 my-20">
      <div className="bg-gray-400 w-full h-80">Hero image</div>
      <h1 className="text-center text-5xl font-black p-10">Title</h1>
      <p className="text-center p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla est
        ullamcorper eget nulla facilisi etiam. Ac turpis egestas integer eget
        aliquet nibh praesent. Sit amet aliquam id diam maecenas ultricies mi
        eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
        est ullamcorper eget nulla facilisi etiam. Ac turpis egestas integer
        eget aliquet nibh praesent. Sit amet aliquam id diam maecenas ultricies
        mi eget.
      </p>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 flex justify-items-center justify-between">
        {categoryWithImage &&
          categoryWithImage.map((categoryImage) => {
            return (
              <Link
                to={`/products/category/${categoryImage.category}`}
                key={categoryImage.category}
              >
                <CategoryCard
                  category={categoryImage.category}
                  image={categoryImage.image}
                />
              </Link>
            );
          })}
      </div>
    </main>
  );
};

export default Landing;
