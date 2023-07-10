import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartState {
  value: number
}

// Define the initial state using that type
const initialState: CartState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: () => {},
    removeToCart: () => {},
  },
})

export const { } = cartSlice.actions