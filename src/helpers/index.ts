import Cookies from "universal-cookie";
import { green, grey, orange } from "@mui/material/colors";

import { IWord } from "types";

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

export const getWordCountByState = (
  words: IWord[] | undefined,
  stateWord: "new" | "learning" | "learned"
) => {
  return words?.filter((word) => word.stateWord === stateWord).length;
};

export const handleIconStyles = (stateWord: string | undefined) => ({
  color:
    stateWord === "new"
      ? grey[500]
      : stateWord === "learning"
      ? orange[500]
      : stateWord === "learned"
      ? green[500]
      : grey[500],
});
