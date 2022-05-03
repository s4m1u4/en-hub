import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { api } from "services/api";
import { getUserId } from "helpers";
import { IDictionaryState } from "store/types";
import { ISet, IWord } from "types";
import { AxiosResponse } from "axios";

export const getWords = createAsyncThunk(
  "dictionary/getWords",
  async (
    {
      page,
      limit,
      setId,
      searchValue,
      stateValue,
    }: {
      page?: number;
      limit?: number;
      setId?: string | number;
      searchValue?: string;
      stateValue?: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const userId = getUserId();
      const response: AxiosResponse<IWord[]> = await api.fetchRequest({
        url: `/words`,
        method: "get",
        params: {
          _limit: limit,
          _page: page,
          user: userId,
          set: setId === "my" ? null : setId,
          originalWord_like: searchValue || null,
          stateWord_like: stateValue || null,
        },
      });
      return {
        data: response.data,
        countWord: response.headers["x-total-count"],
      };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

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

export const getSets = createAsyncThunk(
  "dictionary/getSets",
  async ({ setId }: { setId?: string | number }, { rejectWithValue }) => {
    try {
      const userId = getUserId();
      const response: AxiosResponse<ISet[]> = await api.fetchRequest({
        url: "/sets?user=admin",
        method: "get",
        params: {
          user: userId,
          id: setId || null,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addSet = createAsyncThunk(
  "dictionary/addSet",
  async (setData: ISet, { rejectWithValue }) => {
    try {
      await api.fetchRequest({
        url: "/sets",
        method: "post",
        body: setData,
      });
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteSet = createAsyncThunk(
  "dictionary/deleteSet",
  async (setId: string | number, { rejectWithValue }) => {
    try {
      await api.fetchRequest({
        url: `/sets/${setId}`,
        method: "delete",
      });
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: IDictionaryState = {
  page: 1,
  countPage: 0,
  sets: [],
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
  extraReducers: {
    // GET WORDS
    [getWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getWords.fulfilled.type]: (
      state,
      action: PayloadAction<{ data: IWord[]; countWord: number }>
    ) => {
      state.words = action.payload.data;
      state.countPage = Math.ceil(action.payload.countWord / 10);
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
    // GET SETS
    [getSets.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSets.fulfilled.type]: (state, action: PayloadAction<ISet[]>) => {
      state.sets = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [getSets.rejected.type]: (state) => {
      state.isLoading = false;
    },
    // ADD SET
    [addSet.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addSet.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [addSet.rejected.type]: (state) => {
      state.isLoading = false;
    },
    // DELETE SET
    [deleteSet.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteSet.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [deleteSet.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setPage, resetState, setStateValue, setSearchValue } =
  dictionarySlice.actions;
export default dictionarySlice.reducer;
