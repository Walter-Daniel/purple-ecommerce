import { useFetch } from "../api/base.api";
import { ProductsContext } from "./ProductsContext";
import { useContext } from 'react';

interface props {
    children : JSX.Element | JSX.Element[];
}

export const ProductsProvider = ({ children }: props) => {

    const { menCategory, womenCategory, loading, error, allProducts } = useFetch('https://fakestoreapi.com/products');

    return(
        <ProductsContext.Provider 
            value={{
                    menCategory,
                    womenCategory,
                    allProducts,
                    loading,
                    error
                    }}>
            {children}
        </ProductsContext.Provider>
    )

}

export const useContextProducts = () => {
    const context = useContext(ProductsContext);
    if(!context) throw new Error('No existe Contexto')
    return context
}