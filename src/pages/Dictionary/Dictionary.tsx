import React, { FC } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import { green } from "@mui/material/colors";

import { useGetWordsQuery } from "store/reducers/word/wordApi";
import { useGetSetsQuery } from "store/reducers/set/setApi";
import { Overview, Sets } from "pages/Dictionary";
import { getUserId } from "helpers";

export const Dictionary: FC = () => {
  const userId = getUserId();

  const { data, isLoading } = useGetWordsQuery(
    { userId },
    { refetchOnMountOrArgChange: true }
  );
  const { data: sets } = useGetSetsQuery(
    { userId },
    { refetchOnMountOrArgChange: true }
  );

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
          <Overview words={data?.words} />
          <Sets sets={sets} />
        </Box>
      )}
    </Container>
  );
};
