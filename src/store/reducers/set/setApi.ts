import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IGetSetsParams } from "store/types";
import { ISet } from "types";

export const setApi = createApi({
  tagTypes: ["Set"],
  reducerPath: "setApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getSets: builder.query<ISet[], IGetSetsParams>({
      query: ({ userId }) => ({
        url: `/sets?user=admin`,
        params: {
          user: userId,
        },
      }),
      providesTags: (result) => ["Set"],
    }),
    addSet: builder.mutation<void, ISet>({
      query: (setData) => ({
        url: `/sets`,
        method: "POST",
        body: setData,
      }),
      invalidatesTags: (result) => ["Set"],
    }),
    deleteSet: builder.mutation<void, string>({
      query: (setId) => ({
        url: `/sets/${setId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => ["Set"],
    }),
  }),
});

export const { useGetSetsQuery, useAddSetMutation, useDeleteSetMutation } =
  setApi;
