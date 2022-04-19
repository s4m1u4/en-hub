import { configureStore } from "@reduxjs/toolkit";

import userSlice from "store/reducers/userSlice";
import dictionarySlice from "store/reducers/dictionarySlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    dictionary: dictionarySlice,
  },
});
