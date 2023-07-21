import { useFetch } from "../api/base.api";
import { ProductsContext } from "./ProductsContext";
import { useContext } from 'react';

interface props {
    children : JSX.Element | JSX.Element[];
}

const url: string | undefined = import.meta.env.VITE_REACT_APP_BASE_URL

export const ProductsProvider = ({ children }: props) => {

    const { menCategory, womenCategory, loading, error, allProducts } = useFetch(`${url}/products`);

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