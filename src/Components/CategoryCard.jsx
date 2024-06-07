import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, image }) => {
    return (
        <Link to={`/products/${category}`}>
            <span className="w-full ">
                <img src={image} className=" w-full h-96" />
                <h3 className=" text-center p-4 text-base">{category}</h3>
            </span>
        </ Link>
    )
}

export default CategoryCard;