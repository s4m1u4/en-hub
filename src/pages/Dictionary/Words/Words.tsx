import React, { FC, useEffect } from "react";
import { Container } from "@mui/material";

import { Filters, WordsList } from "pages/Dictionary";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  getWords,
  setStateValue,
  setSearchValue,
} from "store/reducers/dictionarySlice";

import { TextTitle } from "./Words.styles";

export const Words: FC = () => {
  const dispatch = useAppDispatch();
  const { words } = useAppSelector((state) => state.dictionary);

  useEffect(() => {
    dispatch(getWords({}));
    return () => {
      dispatch(setSearchValue(""));
      dispatch(setStateValue(""));
    };
  }, [dispatch]);

  return (
    <Container sx={{ py: 2 }}>
      <TextTitle>My dictionary ({words.length})</TextTitle>
      <Filters />
      <WordsList words={words} />
    </Container>
  );
};
