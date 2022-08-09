import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setToken = (token: string) => {
  return cookies.set("token", token);
};

export const getToken = () => {
  return cookies.get("token") || "";
};

export const removeToken = () => {
  return cookies.remove("token");
};
