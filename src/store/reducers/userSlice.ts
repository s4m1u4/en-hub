import { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { api } from "services/api";
import { getUserId, isAuth, setToken, setUserId } from "helpers";
import {
  IUserData,
  IUserRegistrationData,
  IUserAuthenticationData,
} from "types";
import { IFetchUserData, IUserState } from "store/types";

export const userRegistration = createAsyncThunk(
  "user/userRegistration",
  async (userRegistrationData: IUserRegistrationData, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IFetchUserData> = await api.fetchRequest({
        url: "/signup",
        method: "post",
        body: userRegistrationData,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userAuthentication = createAsyncThunk(
  "user/userAuthentication",
  async (
    userAuthenticationData: IUserAuthenticationData,
    { rejectWithValue }
  ) => {
    try {
      const response: AxiosResponse<IFetchUserData> = await api.fetchRequest({
        url: "/login",
        method: "post",
        body: userAuthenticationData,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (_, { rejectWithValue }) => {
    try {
      const userId = getUserId();
      const response: AxiosResponse<IUserData> = await api.fetchRequest({
        url: `/users/${userId}`,
        method: "get",
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: IUserState = {
  user: {
    id: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
  },
  isLoading: false,
  error: "",
  isAuth: isAuth(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeError: (state) => {
      state.error = "";
    },
    setIsAuth: (state) => {
      state.isAuth = isAuth();
    },
  },
  extraReducers: {
    // USER REGISTRATION
    [userRegistration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [userRegistration.fulfilled.type]: (
      state,
      action: PayloadAction<IFetchUserData>
    ) => {
      setToken(action.payload.accessToken);
      setUserId(action.payload.user.id);
      state.user = action.payload.user;
      state.error = "";
      state.isAuth = isAuth();
      state.isLoading = false;
    },
    [userRegistration.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // USER AUTHENTICATION
    [userAuthentication.pending.type]: (state) => {
      state.isLoading = true;
    },
    [userAuthentication.fulfilled.type]: (
      state,
      action: PayloadAction<IFetchUserData>
    ) => {
      setToken(action.payload.accessToken);
      setUserId(action.payload.user.id);
      state.user = action.payload.user;
      state.error = "";
      state.isAuth = isAuth();
      state.isLoading = false;
    },
    [userAuthentication.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // GET USER DATA
    [getUserData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUserData.fulfilled.type]: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [getUserData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setIsAuth, removeError } = userSlice.actions;
export default userSlice.reducer;
