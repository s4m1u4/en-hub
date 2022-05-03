import { store } from "./store";
import { ISet, IUserData, IWord } from "types";

export interface IUserState {
  user: IUserData;
  isLoading: boolean;
  error: string;
  isAuth: boolean;
}

export interface IDictionaryState {
  page: number;
  countPage: number;
  words: IWord[];
  sets: ISet[];
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
