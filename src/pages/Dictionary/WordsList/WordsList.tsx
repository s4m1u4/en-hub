import React, { FC } from "react";
import { Box } from "@mui/material";

import { WordsItem } from "pages/Dictionary";
import { ISet, IWord } from "types";

interface IWordsList {
  words: IWord[] | undefined;
  sets: ISet[] | undefined;
}

export const WordsList: FC<IWordsList> = ({ words, sets }) => {
  return (
    <Box>
      {words?.map((word) => (
        <WordsItem key={word?.id} word={word} sets={sets} />
      ))}
    </Box>
  );
};
