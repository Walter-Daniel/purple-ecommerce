import { createSlice } from "@reduxjs/toolkit";

interface ProductProps {
    title: string | null
    description: string | null
    price: number | null
    size: string | null
    photoURL: string | null
    status: boolean | null
    message: string | null
}

const initialState: ProductProps = {
    title: null,
    description: null,
    price:null,
    size: null,
    photoURL: null,
    status: false,
    message: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        newProduct: ( state, {payload} ) => {
            state.title= payload.title
            state.description= payload.description
            state.price= payload.price
            state.size= payload.size
            state.photoURL= payload.photoURL
            state.status= true
            state.message= payload.message
        }
    }
});

export const { newProduct } = productSlice.actions;