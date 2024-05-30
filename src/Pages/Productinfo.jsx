/* Containing productcard, similar products navigation back to landingpage */

import { useContext } from "react";
import { useParams} from 'react-router-dom'
import { useProducts } from "../Context/ProductContext"
import { CartContext } from "../Context/CartContext";


const ProductInfo = () =>{
    const {productId} = useParams()
    const {data, isLoading, isError} = useProducts();
    const {addToCart} = useContext(CartContext);

    if (isError) return <h1>Failed to fetch product</h1>
    if (isLoading) return <h1>Loading...</h1>

    const product = data.find((p) => p.id == productId);

    if (!product) return <h1>Product not found</h1>

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className="w-40"/>
            <p>{product.description}</p>
            <div>Categoty: {product.category}</div>
            <div>Price: ${product.price}</div>
            <button onClick={ ()=> addToCart(product)}>Add to Cart</button>

        </div>
    )
}

export default ProductInfo