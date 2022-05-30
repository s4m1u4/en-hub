import React, { FC } from "react";
import { Box, Container } from "@mui/material";

import { useGetWordsQuery } from "store/reducers/word/wordApi";
import { useGetSetsQuery } from "store/reducers/set/setApi";
import { Overview, Sets } from "pages/Dictionary";
import { getUserId } from "helpers";

export const Dictionary: FC = () => {
  const userId = getUserId();

  const { data, isLoading: isLoadingWords } = useGetWordsQuery(
    { userId },
    { refetchOnMountOrArgChange: true }
  );
  const { data: sets, isLoading: isLoadingSets } = useGetSetsQuery(
    { userId },
    { refetchOnMountOrArgChange: true }
  );

  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
        <Overview words={data?.words} isLoading={isLoadingWords} />
        <Sets sets={sets} isLoading={isLoadingSets} />
      </Box>
    </Container>
  );
};
