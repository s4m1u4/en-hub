import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFetchWords, IWordState } from "store/types";
import { wordApi } from "store/reducers/word/wordApi";

const initialState: IWordState = {
  limit: 10,
  page: 1,
  countPage: 0,
  stateValue: "",
  searchValue: "",
};

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    resetState: () => initialState,
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setStateValue: (state, action: PayloadAction<string>) => {
      state.stateValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      wordApi.endpoints.getWords.matchFulfilled,
      (state, action: PayloadAction<IFetchWords>) => {
        state.countPage = Math.ceil(action.payload.countWord / state.limit);
      }
    );
  },
});

export const wordActions = wordSlice.actions;
export const wordReducer = wordSlice.reducer;
