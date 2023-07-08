import { createContext } from 'react';
import { TypeProducts } from '../types/products.interface';

type ProductProps = {
    menCategory : TypeProducts[] | undefined;
    womenCategory: TypeProducts[] | undefined;
    loading: boolean;
    error: null | string;
}

export const ProductsContext = createContext<ProductProps>({} as ProductProps);

