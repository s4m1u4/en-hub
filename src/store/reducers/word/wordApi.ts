import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
  IFetchWords,
  IGetWordsParams,
  IChangeWordParams,
  IFetchDictionaryWords,
  IGetDictionaryWordsParams,
} from "store/types";
import { IWord } from "types";

export const wordApi = createApi({
  tagTypes: ["Word"],
  reducerPath: "wordApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getWords: builder.query<IFetchWords, IGetWordsParams>({
      query: ({ userId, page, limit, setId, stateValue, searchValue }) => ({
        url: `/words`,
        params: {
          _page: page,
          _limit: limit,
          user: userId,
          set: setId === "my" ? undefined : setId,
          originalWord_like: searchValue || undefined,
          stateWord_like: stateValue || undefined,
        },
      }),
      transformResponse: (response: IWord[], meta) => {
        return {
          words: response,
          countWord: Number(meta?.response?.headers.get("x-total-count")),
        };
      },
      providesTags: (result) => ["Word"],
    }),
    getDictionaryWords: builder.query<
      IFetchDictionaryWords[],
      IGetDictionaryWordsParams
    >({
      query: ({ page, limit }) => ({
        url: "/dictionary",
        params: {
          _page: page,
          _limit: limit,
        },
      }),
    }),
    addWord: builder.mutation<void, IWord>({
      query: (wordData) => ({
        url: `/words`,
        method: "POST",
        body: wordData,
      }),
      invalidatesTags: (result) => ["Word"],
    }),
    deleteWord: builder.mutation<void, string | number | undefined>({
      query: (wordId) => ({
        url: `/words/${wordId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => ["Word"],
    }),
    changeWord: builder.mutation<void, IChangeWordParams>({
      query: ({ wordId, newState, originalWord, translationWord, set }) => ({
        url: `/words/${wordId}`,
        method: "PATCH",
        body: {
          set: set,
          stateWord: newState,
          originalWord: originalWord,
          translationWord: translationWord,
        },
      }),
      invalidatesTags: (result) => ["Word"],
    }),
  }),
});

export const {
  useGetWordsQuery,
  useGetDictionaryWordsQuery,
  useAddWordMutation,
  useDeleteWordMutation,
  useChangeWordMutation,
} = wordApi;
