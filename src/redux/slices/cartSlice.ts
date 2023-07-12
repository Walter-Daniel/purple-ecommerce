import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AddCartState {
    id: string | number;
    title: string;
    description: string;
    price: number;
    img: string;
    newID: string | number;
}

export interface RemoveCartState {
    id: string | number;
}


// Define the initial state using that type
const initialState: AddCartState[] = 
[
  {
    id : "",
    title : "",
    description : "",
    price: 0,
    img:"",
    newID : 0
}
];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, {payload}: PayloadAction<AddCartState>) => {
      
      state.push( payload )
    },
    removeToCart: (state, {payload}: PayloadAction<RemoveCartState>) => {
      return state.filter(item => item.id !== payload.id )
    },
  },
})

export const { addToCart, removeToCart } = cartSlice.actions