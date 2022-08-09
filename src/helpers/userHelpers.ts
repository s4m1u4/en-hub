import Cookies from "universal-cookie";
import { getToken } from "helpers";

const cookies = new Cookies();

export const setUserId = (userId: string | number) => {
  return cookies.set("user_id", userId);
};

export const getUserId = () => {
  return cookies.get("user_id") || "";
};

export const removeUserId = () => {
  return cookies.remove("user_id");
};

export const isAuth = () => {
  return !!getToken();
};
