import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getItmes } from '../../utilities/localStorage';

// Define a type for the slice state
interface AddCartState {
    id: string | number;
    title: string;
    price: number;
    img: string;
    newID: string | number;
}

export interface RemoveCartState {
    newID: string | number;
}


// Estado inicial está escuchando al localStorage
const initialState: AddCartState[] = getItmes('cart')||[];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, {payload}: PayloadAction<AddCartState>) => {
      state.push( payload )
    },
    removeToCart: (state, {payload}: PayloadAction<RemoveCartState>) => {
      console.log()
      return state.filter(item => item.newID !== payload.newID )
    },
  },
})

export const { addToCart, removeToCart } = cartSlice.actions