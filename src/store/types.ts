import { store } from "./store";
import { IUser, IWord } from "types";

export interface IFetchUser {
  accessToken: string;
  user: IUser;
}

export interface IFetchWords {
  words: IWord[];
  countWord: number;
}

export interface IGetSetsParams {
  userId: string;
}

export interface IGetWordsParams {
  userId: string;
  page?: number;
  limit?: number;
  setId?: string;
  searchValue?: string;
  stateValue?: string;
}

export interface IChangeWordParams {
  wordId: string | number | undefined;
  newState: string;
}

export interface IUserState {
  isAuth: boolean;
}

export interface IWordState {
  limit: number;
  page: number;
  countPage: number;
  searchValue: string;
  stateValue: string;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
