import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './features/note/noteSlice';

export const store= configureStore(
  {
    reducer: {
      note: noteReducer
    }
  }
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeofstore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeofstore.dispatch
