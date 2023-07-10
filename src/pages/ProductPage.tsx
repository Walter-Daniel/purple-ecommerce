import { FC, useState } from "react";
import { useContextProducts } from "../context/ProductsProvider";
import { TypeProducts } from '../types/products.interface';

export const ProductPage : FC<{}> = () => {

    const [product, setProduct] = useState<TypeProducts[] | null>(null)

    const { allProducts  } = useContextProducts();

    const filterProduct =  allProducts?.filter((item) => {
        item.id === {id}
    })


    //con react redux toolkit, traigo el id del producto al que se le hace click, se utiliza el filtro, me trae un producto y a partir de ese, esquematizo la página.
    return(

    )
}