import React, { FC } from "react";
import { Box } from "@mui/material";

import { WordsItem } from "pages/Dictionary";
import { IWord } from "types";

interface IWordsList {
  words: IWord[];
}

export const WordsList: FC<IWordsList> = ({ words }) => {
  return (
    <Box>
      {words.map((word) => (
        <WordsItem key={word.id} word={word} />
      ))}
    </Box>
  );
};
