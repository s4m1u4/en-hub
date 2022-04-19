import { Method } from "axios";

export interface IFetchRequestValues {
  url: string;
  method: Method;
  body?: object | null;
  token?: string | null;
  params?: object | null;
}

export interface IApi {
  fetchRequest: (values: IFetchRequestValues) => any;
}
