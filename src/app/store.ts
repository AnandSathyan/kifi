import { configureStore } from "@reduxjs/toolkit";
import kifiSlice from "../views/desktop/kifi/kifi.slice";

import usersSlice from "../views/users/users.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    kifi: kifiSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
