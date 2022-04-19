import React, { FC, useEffect } from "react";
import { Container } from "@mui/material";

import { Overview } from "pages/Dictionary";
import {
  getWords,
  setStateValue,
  setSearchValue,
} from "store/reducers/dictionarySlice";
import { useAppDispatch } from "hooks";

export const Dictionary: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWords({}));
    return () => {
      dispatch(setSearchValue(""));
      dispatch(setStateValue(""));
    };
  }, [dispatch]);

  return (
    <Container sx={{ py: 2 }}>
      <Overview />
    </Container>
  );
};
