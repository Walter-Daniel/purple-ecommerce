

import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices';
import { authSlice } from './auth';
import { productSlice } from './products';


export const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
    authReducer: authSlice.reducer,
    productReducer: productSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch