import { getProducts} from "../api/dataFetching"
import {useQuery} from "@tanstack/react-query"

const ProductList = () =>{

    const {data, isLoading, isError} = useQuery({
        queryKey:["products"],
        queryFn: getProducts,
    })

    if (isError)
    return <h1>Failed to fetch product</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
    <div>
        {data && 
        data.map((product) => {
            return (
              <div key={product.id} className="mb-4 mt-4">
                <h1 className="font-bold">{product.title}</h1>
                <img src={product.image} alt={product.title} className="w-40" />
                <p>{product.description}</p>
                <div>{product.category}</div>
                <div> ${product.price}</div>
                <div>
                  {product.rating.rate} ({product.rating.count} reviews)
                </div>
              </div>
            );
        })}
    </div>
    );
}

export default ProductList