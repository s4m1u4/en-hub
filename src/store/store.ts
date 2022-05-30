import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "store/reducers/user/userApi";
import { userReducer } from "store/reducers/user/userSlice";
import { wordApi } from "store/reducers/word/wordApi";
import { wordReducer } from "store/reducers/word/wordSlice";
import { setApi } from "store/reducers/set/setApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    word: wordReducer,
    [userApi.reducerPath]: userApi.reducer,
    [wordApi.reducerPath]: wordApi.reducer,
    [setApi.reducerPath]: setApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      wordApi.middleware,
      setApi.middleware
    ),
});
