import { useFetch } from "../api/base.api";
import { ProductsContext } from "./ProductsContext";
import { useContext } from 'react';

interface props {
    children : JSX.Element | JSX.Element[];
}

export const ProductsProvider = ({ children }: props) => {

    const { menCategory, womenCategory, loading, error } = useFetch('https://fakestoreapi.com/products');

    return(
        <ProductsContext.Provider 
            value={{
                    menCategory,
                    womenCategory,
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