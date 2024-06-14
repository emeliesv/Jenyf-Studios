import React from "react";

const CategoryCard = ({ category, image }) => {
  return (
    <div className="relative w-80 h-60 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={image}
          alt={category}
          className="h-full w-full object-contain p-8"
        />
        <div className="absolute inset-0 bg-jenyfNeutralDark opacity-60 hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-16 text-center pointer-events-none">
        <div className="absolute inset-0 bg-transparent hover:bg-jenyfNeutralDark opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-lg">{category}</h3>
        </div>

        <button className="mt-2 bg-white text-black text-xs">Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryCard;
