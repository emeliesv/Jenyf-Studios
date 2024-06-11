import React from "react";

const CategoryCard = ({ category, image }) => {
  return (
    <span className="w-80">
      <img src={image} className="h-96 w-full" />
      <h3 className=" text-center p-4 text-base">{category}</h3>
    </span>
  );
};

export default CategoryCard;
