import { createContext, useContext } from "react"
import { getProducts} from "../api/dataFetching"
import {useQuery} from "@tanstack/react-query"

const ProductContext = createContext()

export const useProducts = () =>{
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const {data, isLoading, isError} = useQuery ({
        queryKey: ['products'],
        queryFn: getProducts,
    })
return (
    <ProductContext.Provider value={{data, isLoading, isError}}>
        {children}
    </ProductContext.Provider>
    )
}