import React, { ChangeEvent, FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { green } from "@mui/material/colors";
import {
  Box,
  Container,
  Typography,
  Pagination,
  CircularProgress,
} from "@mui/material";

import { Filters, WordsList } from "pages/Dictionary";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  getSets,
  getWords,
  resetState,
  setPage,
} from "store/reducers/dictionarySlice";

import { TextTitle } from "./Words.styles";

export const Words: FC = () => {
  const dispatch = useAppDispatch();
  const { setId } = useParams();
  const { page, countPage, words, sets, isLoading, searchValue, stateValue } =
    useAppSelector((state) => state.dictionary);

  const currentSet = sets.find((set) => set.id === setId);

  const handleChangePage = async (
    event: ChangeEvent<unknown>,
    page: number
  ) => {
    await dispatch(getWords({ page, limit: 10, searchValue, stateValue }));
    dispatch(setPage(page));
  };

  useEffect(() => {
    dispatch(getWords({ setId, limit: 10 }));
    dispatch(getSets({}));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, setId]);

  return (
    <Container sx={{ py: 2 }}>
      <Box
        sx={{
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextTitle>{currentSet?.title}</TextTitle>
      </Box>
      <Filters />
      {isLoading ? (
        <Box
          sx={{
            py: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress sx={{ color: green[500] }} />
        </Box>
      ) : words.length ? (
        <WordsList words={words} />
      ) : (
        <Typography variant="subtitle1">Word list is empty ☹️</Typography>
      )}
      {countPage > 1 && (
        <Box sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
          <Pagination
            page={page}
            count={countPage}
            size="small"
            color="primary"
            shape="rounded"
            variant="outlined"
            onChange={handleChangePage}
            sx={{ "& button": { margin: "0 3px" } }}
          />
        </Box>
      )}
    </Container>
  );
};
