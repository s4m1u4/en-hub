import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { IApi, IFetchRequestValues } from "./types";

class Api implements IApi {
  fetchRequest = async ({ url, method, params, body }: IFetchRequestValues) => {
    const config: AxiosRequestConfig = {
      url,
      method,
      params,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
      baseURL: "http://localhost:5000",
    };
    const response: AxiosResponse = await axios(config);
    return response;
  };
}

export const api = new Api();
