import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { api } from "services/api";
import { getUserId } from "helpers";
import { IDictionaryState } from "store/types";
import { IWord } from "types";

export const addWord = createAsyncThunk(
  "dictionary/addWord",
  async (wordData: IWord, { rejectWithValue }) => {
    try {
      await api.fetchRequest({
        url: "/words",
        method: "post",
        body: wordData,
      });
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteWord = createAsyncThunk(
  "dictionary/deleteWord",
  async (wordId: string | number, { rejectWithValue }) => {
    try {
      await api.fetchRequest({
        url: `/words/${wordId}`,
        method: "delete",
      });
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const changeStateWord = createAsyncThunk(
  "dictionary/changeStateWord",
  async (
    { wordId, newState }: { wordId: string | number; newState: string },
    { rejectWithValue }
  ) => {
    try {
      await api.fetchRequest({
        url: `/words/${wordId}`,
        method: "patch",
        body: {
          stateWord: newState,
        },
      });
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getWords = createAsyncThunk(
  "dictionary/getWords",
  async (
    { searchValue, stateValue }: { searchValue?: string; stateValue?: string },
    { rejectWithValue }
  ) => {
    try {
      const userId = getUserId();
      const words: IWord[] = await api.fetchRequest({
        url: `/words`,
        method: "get",
        params: {
          user: userId,
          originalWord_like: searchValue,
          stateWord_like: stateValue,
        },
      });
      return words;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: IDictionaryState = {
  words: [],
  isLoading: false,
  error: "",
  searchValue: "",
  stateValue: "",
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setStateValue: (state, action: PayloadAction<string>) => {
      state.stateValue = action.payload;
    },
  },
  extraReducers: {
    // GET WORDS
    [getWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getWords.fulfilled.type]: (state, action: PayloadAction<IWord[]>) => {
      state.words = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [getWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
    // ADD WORD
    [addWord.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addWord.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [addWord.rejected.type]: (state) => {
      state.isLoading = false;
    },
    // DELETE WORD
    [deleteWord.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteWord.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [deleteWord.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setSearchValue, setStateValue } = dictionarySlice.actions;
export default dictionarySlice.reducer;
