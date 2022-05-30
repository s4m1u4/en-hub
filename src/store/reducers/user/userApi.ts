import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IUser, IRegistrationData, IAuthenticationData } from "types";
import { IFetchUser } from "store/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
      }),
    }),
    authenticationUser: builder.mutation<IFetchUser, IAuthenticationData>({
      query: (authenticationData) => ({
        url: `/login`,
        method: "POST",
        body: authenticationData,
      }),
    }),
    registrationUser: builder.mutation<IFetchUser, IRegistrationData>({
      query: (registrationData) => ({
        url: `/signup`,
        method: "POST",
        body: registrationData,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useAuthenticationUserMutation,
  useRegistrationUserMutation,
} = userApi;
