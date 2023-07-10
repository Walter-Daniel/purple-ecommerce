import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '.'

export const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch