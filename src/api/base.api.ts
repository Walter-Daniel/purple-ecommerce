import { useEffect, useState } from "react"
import { TypeProducts } from "../types/products.interface"

export const useFetch = (url:string) => {

    const [products, setProducts] = useState<TypeProducts[] | null >(null);
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
                      .then(res=>res.json())
                      .then(json=>setProducts(json))
                      .catch(error => seterror(error))
                      .finally(() => setLoading(false))
    }, [])
  
    const womenCategory = products?.filter(item => (
        item.category === "women's clothing"
    ))
    const menCategory = products?.filter(item => (
      item.category === "men's clothing"
    ))

    return { 
        womenCategory,
        menCategory,
        loading,
        error
     }
}