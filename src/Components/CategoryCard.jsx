import React from "react";

const CategoryCard = ({ category, image }) => {
  return (
    <span className="w-full ">
      <img src={image} className=" w-full h-96" />
      <h3 className=" text-center p-4 text-base">{category}</h3>
    </span>
  );
};

export default CategoryCard;
