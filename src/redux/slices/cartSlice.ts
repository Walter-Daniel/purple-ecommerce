import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AddCartState {
    id: string | number;
    name: string;
    info: string;
    price: number;
    image: string;
}

interface RemoveCartState {
    id: string | number;
}


// Define the initial state using that type
const initialState: AddCartState[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, {payload}: PayloadAction<AddCartState>) => {
        if(state.length === 0 || 
           state.filter((item) => item.id === payload.id).length === 0){
           state.push(payload)
        }
    },
    removeToCart: (state, action: PayloadAction<RemoveCartState>) => {},
  },
})

export const { addToCart, removeToCart } = cartSlice.actions