import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFetchUser, IUserState } from "store/types";
import { isAuth, setToken, setUserId } from "helpers";
import { userApi } from "./userApi";

const initialState: IUserState = {
  isAuth: isAuth(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state) => {
      state.isAuth = isAuth();
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.authenticationUser.matchFulfilled,
      (state, action: PayloadAction<IFetchUser>) => {
        setToken(action.payload.accessToken);
        setUserId(action.payload.user.id);
        state.isAuth = isAuth();
      }
    );
    builder.addMatcher(
      userApi.endpoints.registrationUser.matchFulfilled,
      (state, action: PayloadAction<IFetchUser>) => {
        setToken(action.payload.accessToken);
        setUserId(action.payload.user.id);
        state.isAuth = isAuth();
      }
    );
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
