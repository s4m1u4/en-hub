import React, { ChangeEvent, FC } from "react";
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
import { useActions, useAppSelector } from "hooks";
import { useGetWordsQuery } from "store/reducers/word/wordApi";
import { useGetSetsQuery } from "store/reducers/set/setApi";
import { getUserId } from "helpers";

import { TextTitle } from "./Words.styles";

export const Words: FC = () => {
  const { setId } = useParams();
  const userId = getUserId();
  const { setPage } = useActions();
  const { limit, page, countPage, searchValue, stateValue } = useAppSelector(
    (state) => state.word
  );

  const { data, isLoading: isLoadingWords } = useGetWordsQuery(
    {
      userId,
      setId,
      limit,
      page,
      searchValue,
      stateValue,
    },
    { refetchOnMountOrArgChange: true }
  );
  const { data: sets } = useGetSetsQuery(
    { userId },
    { refetchOnMountOrArgChange: true }
  );

  const currentSet = sets?.find((set) => set.id === setId);

  const handleChangePage = async (
    event: ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

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
      {isLoadingWords ? (
        <Box sx={{ py: 4, display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ color: green[500] }} />
        </Box>
      ) : data?.words?.length ? (
        <WordsList words={data?.words} sets={sets} />
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
