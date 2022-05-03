import React, { FC, useEffect } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import { green } from "@mui/material/colors";

import { Overview, Sets } from "pages/Dictionary";
import { getSets, getWords } from "store/reducers/dictionarySlice";
import { useAppDispatch, useAppSelector } from "hooks";

export const Dictionary: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.dictionary);

  useEffect(() => {
    dispatch(getWords({}));
    dispatch(getSets({}));
  }, [dispatch]);

  return (
    <Container sx={{ py: 2 }}>
      {isLoading ? (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress sx={{ color: green[500] }} />
        </Box>
      ) : (
        <Box
          sx={{
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Overview />
          <Sets />
        </Box>
      )}
    </Container>
  );
};
