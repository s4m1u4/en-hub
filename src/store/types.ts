import { store } from "./store";
import { IUserData, IWord } from "types";

export interface IUserState {
  user: IUserData;
  isLoading: boolean;
  error: string;
  isAuth: boolean;
}

export interface IDictionaryState {
  words: IWord[];
  isLoading: boolean;
  error: string;
  searchValue: string;
  stateValue: string;
}

export interface IFetchUserData {
  accessToken: string;
  user: IUserData;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
