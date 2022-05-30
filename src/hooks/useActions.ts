import { bindActionCreators } from "@reduxjs/toolkit";

import { useAppDispatch } from "hooks";
import { userActions } from "store/reducers/user/userSlice";
import { wordActions } from "store/reducers/word/wordSlice";

const allActions = {
  ...userActions,
  ...wordActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActions, dispatch);
};
